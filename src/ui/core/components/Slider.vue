<template>
  <v-row class="sliderCard">
    <v-col>
      <v-sheet
        max-width="1700"
        color="rgba(0, 0, 0, 0)"
        v-bind="$attrs"
        :class="classValue"
      >
        <h2 class="white--text ml-8">{{ label }}</h2>
        <v-slide-group class="pa-4" show-arrows>
          <v-slide-item v-for="(n, number) in allMovie" :key="`${n}-${number}`">
            <v-card class="ma-4">
              <v-img
                :src="`https://image.tmdb.org/t/p/w300/${n.poster_path}`"
                width="150px"
                height="230px"
              ></v-img>
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
    classValue: {
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
