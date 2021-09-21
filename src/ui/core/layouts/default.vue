<template>
  <v-app>
    <div>
      <app-top-bar/>
    </div>
      <v-container>
        <Nuxt />
      </v-container>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import AppTopBar from '../components/TopBar.vue'
export default Vue.extend({
  components: {AppTopBar}
})
</script>
