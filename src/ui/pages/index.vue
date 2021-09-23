<template>
  <v-app class="teste">
    <v-row class="d-flex align-center image">
      <v-col class="ml-5">
        <v-col cols="4">
          <p class="white--text titleFilme">{{ movie.title }}</p>
          <v-col class="d-flex pa-0 py-2">
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
      </v-col>
    </v-row>
    <v-row class="sliderCard">
      <v-col>
        <v-sheet
          class="mx-auto slide"
          max-width="1700"
          color="rgba(0, 0, 0, 0)"
          v-bind="$attrs"
        >
          <h2 class="white--text ml-8">Minha Lista</h2>
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
    <AppSlider :movie="movie"></AppSlider>
    <AppSlider :movie="movie"></AppSlider>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { getMovieByIdUseCase } from '~/app/modules/movies-info/use-cases/GetMovieById'
import AppSlider from '~/ui/core/components/Slider.vue'
export default Vue.extend({
  components: { AppSlider },
  data() {
    return {
      movie: {
        title: undefined as string | undefined,
        voteAverage: undefined as number | undefined,
        releaseDate: undefined as string | undefined,
        seasons: undefined as number | undefined,
        overview: undefined as string | undefined,
        genres: undefined as Array<string> | undefined,
        posterImg: undefined as string | undefined,
        backdropImg: undefined as string | undefined,
      },
    }
  },
  created() {
    this.getAllBanks()
  },
  methods: {
    async getAllBanks() {
      const res = await getMovieByIdUseCase.execute({
        idMovie: 12,
      })
      if (res.isLeft()) {
        return alert('Ocorreu um erro')
      }
      const resValue = res.value.getValue()
      this.movie.title = resValue.title
      this.movie.voteAverage = resValue.vote_average
      this.movie.releaseDate = resValue.release_date.substr(0, 4)
      this.movie.seasons = resValue.seasons
      this.movie.overview = resValue.overview
      this.movie.genres = resValue.genres
      this.movie.posterImg =
        'https://image.tmdb.org/t/p/w300/' + resValue.poster_path
      this.movie.backdropImg =
        'https://image.tmdb.org/t/p/original/' + resValue.backdrop_path
    },
  },
})
</script>
<style>
.image {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #000 25%, rgba(255, 255, 255, 0)),
    url('https://image.tmdb.org/t/p/original/dFYguAfeVt19qAbzJ5mArn7DEJw.jpg');
  background-size: cover;
}
.slide {
  margin-top: -130px;
}
.titleFilme {
  font-size: 50px;
}
</style>
