<template>
  <v-row class="sliderCard">
    <v-col>
      <v-sheet max-width="1700" color="rgba(0, 0, 0, 0)" v-bind="$attrs">
        <h2 class="white--text ml-8">{{ label }}</h2>
        <v-slide-group class="pa-4" show-arrows>
          <v-slide-item v-for="n in allMovie" :key="n">
            <v-card class="ma-4">
              <v-img :src="n.posterImg" width="150px" height="230px"></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    allMovie: {
      type: Object,
      required: false,
      default: () => {},
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
  },
})
</script>
<style>
.sliderCard {
  background-color: rgb(0, 0, 0);
}
</style>
