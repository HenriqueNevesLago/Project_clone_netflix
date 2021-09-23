<template>
  <v-row class="sliderCard">
    <v-col>
      <v-sheet
        class="mx-auto"
        max-width="1700"
        color="rgba(0, 0, 0, 0)"
        v-bind="$attrs"
      >
        <h2 class="white--text ml-8">Originais netflix</h2>
        <v-slide-group class="pa-4">
          <v-slide-item v-for="n in 15" :key="n">
            <v-card class="ma-4">
              <v-img
                :src="movie.posterImg"
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

<script>
export default {
  props: {
    movie: {
      require: false,
    },
  },
}
</script>
<style>
.sliderCard {
  background-color: rgb(0, 0, 0);
}
</style>
