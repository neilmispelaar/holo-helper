<template>
  <div>
    <h1>Video controller</h1>

    <video
      id="video-controller-object"
      :src="videoUrl">
    </video>

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
