<template>
  <div>
    <h1>Video controller</h1>

    <video
      id="video-controller-object"
      :src="videoUrl"
      style="max-width: 700px; margin: 15px auto;">
    </video>

    <div class="border border-black p-10 m-10">
      <button
        @click="handleStartSimulation"
        class="bg-green-400 p-5">
        Start
      </button>

    </div>

    <div>
      <h2>Video Jump Controlls</h2>
      <ul id="array-rendering">
        <li
          v-for="videoDataPoint in videoDataPoints"
          v-bind:key="videoDataPoint.id"> 

            <button
              @click="handleStartSimulation(videoDataPoint.timestamp)"
              class="bg-yellow-200 m-2 p-2">
                {{ videoDataPoint.text }} - ({{ videoDataPoint.timestamp }})
            </button>
          
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
    
    function VideoTimeJump(time) {

    }

    return {
      videoUrl,
      videoDataPoints,
      handleStartSimulation,
      VideoTimeJump,
    };

  }
};

</script>
