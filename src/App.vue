<template>
  <div>
    <the-header />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default ({
  components: {
    TheHeader
  }
});
</script>
