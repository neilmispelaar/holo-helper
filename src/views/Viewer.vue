<template>
  <main>

    <h1 class="sr-only">Holo Helper Video Viewer</h1>

    <div v-if="startedFlag === false">
      <div class="">
        <button
          @click="handleStartSimulation"
          class="">Start Simulation</button>
      </div>
    </div>
    <div v-else>

       <div class="px-4 py-6 sm:px-0">
      <div
        class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400"
      >
        Video

        <video-feed />


      </div>
    </div>

    </div>

  </main>
</template>

<script>
import { ref, watchEffect } from 'vue';
import VideoFeed from '../components/VideoFeed.vue';

export default {
  setup () {


    function handleStartSimulation() {
      startedFlag.value = true;
    }

    return {
      startedFlag,
      handleStartSimulation,
    }

  },

  components: {
    VideoFeed
  }
}
</script>
