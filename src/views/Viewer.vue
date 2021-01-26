<template>
  <main>
    <div class="px-4 py-6 sm:px-0">
      <div
        class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400"
      >
        Video

        <video-feed />


      </div>
    </div>
  </main>
</template>

<script>
import { watchEffect } from 'vue';
import VideoFeed from '../components/VideoFeed.vue';

export default {
  setup () {

  },

  components: {
    VideoFeed
  }
}
</script>
