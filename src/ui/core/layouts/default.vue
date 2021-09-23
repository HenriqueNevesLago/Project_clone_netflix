<template>
  <v-app>
    <div>
      <app-top-bar scroll-target="#scrolling-techniques-7" />
    </div>
    <div id="scrolling-techniques-7">
      <Nuxt />
    </div>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import AppTopBar from '../components/TopBar.vue'
export default Vue.extend({
  components: { AppTopBar },
})
</script>
