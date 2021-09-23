<template>
  <v-app>
    <AppCardFimlmeAction :movie="movie" />
    <v-row class="sliderCard">
      <v-col>
        <v-sheet
          class="mx-auto slide"
          max-width="1700"
          color="rgba(0, 0, 0, 0)"
          v-bind="$attrs"
        >
          <h2 class="white--text ml-8">Em Alta</h2>
          <v-slide-group class="pa-4">
            <v-slide-item v-for="n in popularMovie" :key="n.title">
              <v-card class="ma-4">
                <v-img :src="n.posterImg" height="230" width="150"></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <AppSlider :allMovie="originalMovie" label="Originais Netflix"></AppSlider>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { getMovieByIdUseCase } from '~/app/modules/movies-info/use-cases/GetMovieById'
import { getPopularMoviesUseCase } from '~/app/modules/movies-info/use-cases/GetPopularMovies'
import { getOriginalMoviesUseCase } from '~/app/modules/movies-info/use-cases/GetOriginalMovies'
import AppSlider from '~/ui/core/components/Slider.vue'
import AppCardFimlmeAction from '~/ui/core/components/CardFilmeAction.vue'
export default Vue.extend({
  components: { AppSlider, AppCardFimlmeAction },
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
      popularMovie: {},
      originalMovie: {},
    }
  },
  created() {
    this.getAllBanks()
    this.getAllPopularMovies()
    this.getOriginalMovies()
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
    async getAllPopularMovies() {
      const res = await getPopularMoviesUseCase.execute()
      if (res.isLeft()) {
        return alert('Ocorreu um erro')
      }
      this.popularMovie = res.value.getValue().map((i) => {
        return {
          title: i.title,
          voteAverage: i.vote_average,
          releaseDate: i.release_date,
          seasons: i.seasons,
          overview: i.overview,
          genres: i.genres,
          posterImg: 'https://image.tmdb.org/t/p/w300/' + i.poster_path,
          backdropImg: 'https://image.tmdb.org/t/p/original/' + i.backdrop_path,
        }
      })
    },
    async getOriginalMovies() {
      const res = await getOriginalMoviesUseCase.execute()
      if (res.isLeft()) {
        return alert('Ocorreu um erro')
      }
      this.originalMovie = res.value.getValue().map((i) => {
        return {
          title: i.title,
          voteAverage: i.vote_average,
          releaseDate: i.release_date,
          seasons: i.seasons,
          overview: i.overview,
          genres: i.genres,
          posterImg: 'https://image.tmdb.org/t/p/w300/' + i.poster_path,
          backdropImg: 'https://image.tmdb.org/t/p/original/' + i.backdrop_path,
        }
      })
    },
  },
})
</script>

