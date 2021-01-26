<template>
  <div>

    <h1 class="sr-only">Video Controller</h1>

    <div class="flex flex-col md:flex-row bg-gray-100 rounded-lg p-10">

      <div class="w-full md:w-1/2 order-2 md:order-1">

        <section>
          <h2 class="mb-2 text-gray-600 font-semibold">Controls:</h2>
            <div class="">
              <button
                @click="handleStartSimulation"
                class="bg-green-400 p-5">
                Start
              </button>

              <button
                class="bg-yellow-400 p-5">
                Stop
              </button>

              <button
                class="bg-red-400 p-5">
                Reset
              </button>

            </div>
        </section>

      </div>

      <div class="w-full md:w-1/2 order-1 md:order-2">
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




    <div class="border border-black p-10 m-10">
      <button
        @click="handleStartSimulation"
        class="bg-green-400 p-5">
        Start
      </button>

    </div>

    <div>
      <ul id="array-rendering">
        <li
          v-for="videoDataPoint in videoDataPoints"
          v-bind:key="videoDataPoint.id">
          {{ videoDataPoint.text }}
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';
import { getVideoData, getVideoUrl } from "../api/videoApi.js";
import * as Ably from "ably";

export default {
  setup() {

    const videoUrl = ref("");
    const videoDataPoints = ref([]);

    // Get the video time data points
    videoDataPoints.value = getVideoData();

    // Get the video URL
    videoUrl.value = getVideoUrl();

    //videoDataPoints.value = getVideoData();
    function handleStartSimulation() {
      let media = document.getElementById('video-controller-object')

      media.play();

      console.log('hello');

      var ably = new Ably.Realtime('BiSQUw.FNx0Ig:b_cUpgQ-rBUTDFBz');
      var channel = ably.channels.get('holo-helper');

      // Publish a message to the gut-cam channel
      channel.publish('status', 'play');
    }



    return {
      videoUrl,
      videoDataPoints,
      handleStartSimulation,
    };

  }
};

</script>
