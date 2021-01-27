<template>
  <main>

    <h1 class="sr-only">Holo Helper Video Viewer</h1>

    <video-feed />

  </main>
</template>

<script>
import { ref, watchEffect } from 'vue';
import VideoFeed from '../components/VideoFeed.vue';

export default {
  setup () {
  },

  components: {
    VideoFeed
  }
}
</script>
