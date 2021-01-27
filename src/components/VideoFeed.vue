<template>
  <div>

    <h2 class="sr-only">Video Feed</h2>

    <div v-if="status === 'STATUS_NOT_STARTED'">

      <div class="flex flex-col md:flex-row md:justify-center align-middle justify-items-center">
        <p class="order-2 md:order-1 text-blue-600 font-semibold pt-2">
          Waiting for controller to start the show...
        </p>
        <svg
            class="order-1 md:order-2 animate-spin w-10 h-10 ml-2"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="#ffffff"></rect><g transform="translate(50 50) scale(0.69 0.69) rotate(0) translate(-50 -50)" style="fill:#222831"><svg fill="#222831" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M96,256"></path></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M416,256"></path></g></g></g><g><g><g><rect x="384" y="250" width="64" height="12"></rect></g></g></g><g><g><g><rect x="64" y="250" width="64" height="12"></rect></g></g></g><g><g><g><rect x="250" y="384" width="12" height="64"></rect></g></g></g><g><g><g><rect x="250" y="64" width="12" height="64"></rect></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M142.863,142.863"></path></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M369.137,369.137"></path></g></g></g><g><g><g><rect x="342.722" y="365.451" transform="matrix(0.7071 0.7071 -0.7071 0.7071 371.4507 -153.8599)" width="57.457" height="11.999"></rect></g></g></g><g><g><g><rect x="111.821" y="134.55" transform="matrix(0.7071 0.7071 -0.7071 0.7071 140.5493 -58.2174)" width="57.457" height="11.999"></rect></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M142.863,369.137"></path></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M369.137,142.863"></path></g></g></g><g><g><g><rect x="365.451" y="111.821" transform="matrix(0.7071 0.7071 -0.7071 0.7071 208.1579 -221.4799)" width="11.999" height="57.457"></rect></g></g></g><g><g><g><rect x="134.55" y="342.722" transform="matrix(0.7071 0.7071 -0.7071 0.7071 303.8004 9.4026)" width="11.999" height="57.457"></rect></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M142.863,142.863"></path></g></g></g><g><g><g><path fill="none" stroke="#222831" stroke-width="12" stroke-miterlimit="10" d="M142.863,142.863"></path></g></g></g></g></g></svg></g></svg>
      </div>

    </div>
    <div v-else-if="status === 'STATUS_READY_TO_START'">

      <div class="border-gray-200 border-dashed border-4 rounded-xl p-10">

        <div class="text-center">
          <button
            @click="handleStartSimulation"
            class="border-2 border-blue-500 rounded-lg font-bold
            text-blue-500 px-4 py-3 transition duration-300
            ease-in-out hover:bg-blue-500 hover:text-white mr-6">Click here to Start</button>
        </div>

      </div>

    </div>
    <div v-else-if="status === 'STATUS_WAITING_FOR_CONTROLLER'">
      <video
      controls
      id="video-controller-object"
      muted=true
      :src="videoUrl">
      </video>

      <p class="my-10 font-semibold">Status: {{ status }}</p>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import * as Ably from "ably";
import { getVideoUrl } from "../api/videoApi.js";

export default {
  setup() {

    // Status for video viewer
    // STATUS_NOT_STARTED
    // STATUS_READY_TO_START
    // STATUS_WAITING_FOR_CONTROLLER

    const status = ref("");




    const videoUrl = ref("");


    // Set the default status
    status.value = 'STATUS_NOT_STARTED';


    videoUrl.value = getVideoUrl();



    // Function to start the show
    // Sets the status value so that the UI can
    // update
    function handleStartSimulation() {
      status.value = 'STATUS_WAITING_FOR_CONTROLLER';
    };





    var ably = new Ably.Realtime('BiSQUw.JLqmGQ:pbyh31gO6FC1HSzC');
    var channel = ably.channels.get('holo-helper');

    // Subscribe to status messages on channel
    channel.subscribe('status', function(message) {
      console.log("Message", message.data);

      let media = document.getElementById('video-controller-object');

      switch (message.data) {
        // The first step in the process
        // The controller presses the ready button to
        // start the show.
        // The UI updates to show a start button for the user
        case 'ready':

          // Update the status to change the UI
          status.value = 'STATUS_READY_TO_START';

          break;
        case 'play':
          media.play();
          status.value = "Play";
          break;
        case 'Mangoes':
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }

    });

    return {
      status,
      videoUrl,
      handleStartSimulation,
    }

  }
}
</script>
