<template>
  <div>

    <h2 class="sr-only">Video Feed</h2>

    <div class="bg-gray-100 rounded-xl p-10">

      <div v-if="status === 'STATUS_NOT_STARTED'">

        <p>

        </p>

        <div class="flex">
          Waiting for controller...
          <div class="absolute ml-auto">
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </div>
        </div>

      </div>
      <div v-else>
        <video
        controls
        id="video-controller-object"
        muted=true
        :src="videoUrl">
        </video>

        <p class="my-10 font-semibold">Status: {{ status }}</p>

      </div>

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

    const status = ref("");




    const videoUrl = ref("");


    // Set the default status
    status.value = 'STATUS_NOT_STARTED';


    videoUrl.value = getVideoUrl();

    var ably = new Ably.Realtime('BiSQUw.JLqmGQ:pbyh31gO6FC1HSzC');
    var channel = ably.channels.get('holo-helper');

    // Subscribe to status messages on channel
    channel.subscribe('status', function(message) {
      console.log("Message", message.data);

      let media = document.getElementById('video-controller-object');

      switch (message.data) {
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
    }

  }
}
</script>
