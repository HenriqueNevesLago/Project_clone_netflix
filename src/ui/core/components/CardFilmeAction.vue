<template>
  <v-row class="colorBlack">
    <v-col class="ml-5 d-flex align-center">
      <v-col cols="4">
        <p class="white--text titleFilme">{{ movie.title }}</p>
        <v-col class="d-flex pa-0">
          <h4 class="mr-6 green--text">{{ movie.voteAverage }} pontos</h4>
          <h4 class="white--text">{{ movie.releaseDate }}</h4>
        </v-col>
        <p class="text-left white--text">{{ movie.overview }}</p>
        <v-col class="pa-0">
          <v-btn color="white" class="black--text mr-5">
            <v-icon left color="black"> mdi-play </v-icon>
            Assistir
          </v-btn>
          <v-btn depressed class="white--text" color="#444">
            <v-icon left class="white--text"> mdi-plus </v-icon>
            Minha Lista
          </v-btn>
        </v-col>
        <v-col class="d-flex pa-0 mt-2 white--text">
          <h4>Gênero:</h4>
          <div v-for="genre in movie.genres" :key="genre">
            <p class="ml-2">{{ genre.name }},</p>
          </div>
        </v-col>
      </v-col>
      <v-col class="image"><div></div> </v-col>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    movie: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
})
</script>
<style>
.image {
  height: 100vh;
  width: 65vw;
  background-image: linear-gradient(to right, #000, rgba(255, 255, 255, 0)),
    url('https://image.tmdb.org/t/p/original/dFYguAfeVt19qAbzJ5mArn7DEJw.jpg');
  background-size: cover;
}
.slide {
  margin-top: -130px;
}
.titleFilme {
  font-size: 50px;
}
.colorBlack {
  background-color: black;
}
</style>
