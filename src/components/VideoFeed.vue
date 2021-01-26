<template>
  <div>
  <video
    controls
    id="video-controller-object"
    muted=true
    :src="videoUrl">
    </video>
    <p>Status: {{ status }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import * as Ably from "ably";
import { getVideoUrl } from "../api/videoApi.js";

export default {
  setup() {

    const status = ref("");
    const videoUrl = ref("");
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
      videoUrl,
    }

  }
}
</script>
