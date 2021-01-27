<template>
  <div>

    <h1 class="sr-only">Video Controller</h1>

    <div class="flex flex-col md:flex-row bg-gray-100 rounded-lg mt-10 p-10">

      <h2 class="mb-2 text-gray-600 font-semibold">Session controls:</h2>

       <div class="">
          <button
            @click="handleStartSimulation"
            class="bg-green-400 p-5">
            Initialise
          </button>

          <button
            @click="handleResetSimulation"
            class="bg-red-400 p-5">
            Reset
          </button>

        </div>

    </div>

    <section>


    </section>

    <div class="flex flex-col md:flex-row bg-gray-100 rounded-lg mt-10 p-10">

      <div class="w-full md:w-3/4 order-2 md:order-1 md:pr-10">

        <section>

          <h2 class="mb-2 text-gray-600 font-semibold">Playback Controls:</h2>

           <div class="mb-10">

            <button
              @click="handlePlayAction"
              class="bg-green-700 p-5 mr-5">
              Play
            </button>

            <button
              @click="handleStopAction"
              class="bg-yellow-400 p-5 mr-5">
              Stop
            </button>

             <button
              @click="handleBeginningAction"
              class="bg-yellow-600 p-5 mr-5">
              Go to Beginning
            </button>

             <button
              @click="handleJumpAction('m_404')"
              class="bg-red-600 p-5 mr-5">
              404
            </button>

          </div>

        </section>

        <section>
          <h2 class="mb-2 text-gray-600 font-semibold">Prompt Controls:</h2>

          <!-- Go through all of the prompts -->
          <ul id="array-rendering">
            <li
              v-for="videoPrompt in videoPrompts"
              v-bind:key="videoPrompt.id"
              class="bg-white p-5 mb-10 shadow-lg rounded-xl">

                <h3><span class="font-semibold">{{ videoPrompt.code }}</span> - {{ videoPrompt.text }}</h3>

                <p class="text-xs text-gray-500 mt-2">Response options:</p>

                <ul
                  class="flex flex-wrap my-2">

                  <!-- Stall -->
                  <li class="mt-1">
                    <button
                      @click="handleJumpAction('m_stall')"
                      class="border-2 border-blue-500 rounded-lg
                      ont-bold text-blue-500
                      px-4 py-3 transition
                      duration-300 ease-in-out hover:bg-blue-500
                       hover:text-white mr-6">Stall</button>
                  </li>

                  <!-- Rest of the responses -->
                  <li
                    v-for="response in videoPrompt.responses"
                    v-bind:key="response.id"
                    class="mt-1">
                    <button
                      @click="handleJumpAction(response.promptId)"
                      class="border-2 border-green-500 rounded-lg
                      ont-bold text-green-500
                      px-4 py-3 transition
                      duration-300 ease-in-out hover:bg-green-500
                       hover:text-white mr-6">{{ response.text }}</button>
                  </li>

                </ul>

            </li>
          </ul>



        </section>

      </div>

      <div class="w-full md:w-1/4 order-1 md:order-2">
        <section>
          <h2 class="mb-2 text-gray-600 font-semibold">What the user sees:</h2>

          <video
            class="rounded-lg shadow-lg"
            id="video-controller-object"
            :src="videoUrl">
          </video>
        </section>
      </div>

    </div>

  </div>
</template>

<script>
import { reactive, ref, watchEffect, onMounted } from 'vue';
import { getVideoData, getVideoUrl } from "../api/videoApi.js";
import * as Ably from "ably";

export default {
  setup() {

    // variable for the media object
    let media = null;

    // mounted
    onMounted(() => {
      media = document.getElementById('video-controller-object');
    })

    const videoUrl = ref("");
    const videoPrompts = ref([]);

    // Get the video time data points
    videoPrompts.value = getVideoData();

    // Get the video URL
    videoUrl.value = getVideoUrl();

    //videoDataPoints.value = getVideoData();

    var ably = new Ably.Realtime('BiSQUw.FNx0Ig:b_cUpgQ-rBUTDFBz');
    var channel = ably.channels.get('holo-helper');

    // Handler functions

    // This functions fires the ready event to all viewers
    // The first step in the process
    function handleStartSimulation() {
      // Publish a message to the gut-cam channel
      channel.publish('status', 'ready');
      console.log('Controller: Send Start Event');
    }

    // This functions fires the reset event to all viewers
    // Sending everyone back to the first step in the process
    function handleResetSimulation() {
      // Publish a message to the gut-cam channel
      channel.publish('status', 'reset');
      console.log('Controller: Send Reset Event');
    }

    // This functions fires the play event to all viewers
    // The video should start playing
    const handlePlayAction = () => {
      // Publish a message to the gut-cam channel
      channel.publish('status', 'play');
      console.log('Controller: Send Play Event');

      console.log(media);

      // Start playing the controller video
      if (media) {
        try {
          media.play();
        }
        catch {
          console.log('Controller: Error attempting to play');
        }
      }
    }

    // This functions fires the play event to all viewers
    // The video should start playing
    const handleStopAction = () => {
      // Publish a message to the gut-cam channel
      channel.publish('status', 'pause');
      console.log('Controller: Send Stop Event');

      // Start playing the controller video
      if (media) {
        try {
          media.pause();
        }
        catch {
          console.log('Controller: Error attempting to pause');
        }
      }
    }

    // This functions fires the go back to beginning and pause event to all viewers
    // The video should start pause and go to the beginning
    const handleBeginningAction = () => {
      // Publish a message to the gut-cam channel
      channel.publish('status', 'beginning');
      console.log('Controller: Send Beginning Event');

      // Start playing the controller video
      if (media) {
        try {
          media.currentTime = 0;
          media.pause();
        }
        catch {
          console.log('Controller: Error attempting to pause and return to beginning');
        }
      }
    }


    // This functions fires the play event to all viewers
    // The video should start playing
    const handleJumpAction = (promptId) => {

      // Calculate the time point based on the target prompt id
      let time = findTimeByPromptId(promptId);


      // Publish a message to the gut-cam channel
      channel.publish('time', time.toString());
      console.log('Controller: Send time channel and ' + time.toString());

      // Play the local video at the selected jump point
      if (media) {
        try {
          media.currentTime = time;
          media.play();
        }
        catch {
          console.log('Controller: Error attempting to pause');
        }
      }
    }

    // Utility function to loop through the video data
    // and find the prompt with the right id
    const findTimeByPromptId = promptId => {

      console.log('findTimeByPromptId', videoPrompts.value, promptId);

      // Look through the array for the stall entry to get the time code
      var selectedPrompt = videoPrompts.value.find( function( videoPrompt ){
        return videoPrompt.id === promptId;
      });

      console.log('Prompt:', selectedPrompt);

      return selectedPrompt.timeCodeStart;
    }





    return {
      videoUrl,
      videoPrompts,
      handlePlayAction,
      handleStopAction,
      handleJumpAction,
      handleBeginningAction,
      handleStartSimulation,
      handleResetSimulation,
      findTimeByPromptId,
    };

  }
};

</script>
