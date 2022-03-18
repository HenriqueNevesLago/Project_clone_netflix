<template>
  <v-app>
    <AppCardFimlmeAction />
    <AppSlider
      classValue="mx-auto slide"
      :allMovie="popularMovie"
      label="Em Alta"
    ></AppSlider>
    <AppSlider :allMovie="originalMovie" label="Originais Netflix"></AppSlider>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { getPopularMoviesUseCase } from '~/app/modules/movies-info/use-cases/GetPopularMovies'
import { getOriginalMoviesUseCase } from '~/app/modules/movies-info/use-cases/GetOriginalMovies'
import { GetMovieByIdDTO } from '~/app/modules/movies-info/use-cases/GetMovieById/GetMovieByIdDTO'
import AppSlider from '~/ui/core/components/Slider.vue'
import AppCardFimlmeAction from '~/ui/core/components/CardFilmeAction.vue'
import { GetPopularMoviesDTO } from '~/app/modules/movies-info/use-cases/GetPopularMovies/GetPopularMoviesDTO'
import { GetOriginalMoviesDTO } from '~/app/modules/movies-info/use-cases/GetOriginalMovies/GetOriginalMoviesDTO'
export default Vue.extend({
  components: { AppSlider, AppCardFimlmeAction },
  data() {
    return {
      movie: undefined as GetMovieByIdDTO.ResponseProps | undefined,
      popularMovie: undefined as GetPopularMoviesDTO.ResponseBody | undefined,
      originalMovie: undefined as GetOriginalMoviesDTO.ResponseBody | undefined,
    }
  },
  created() {
    this.getAllPopularMovies()
    this.getOriginalMovies()
  },
  methods: {
    async getAllPopularMovies() {
      const res = await getPopularMoviesUseCase.execute()
      if (res.isLeft()) {
        return alert('Ocorreu um erro')
      }
      this.popularMovie = res.value.getValue()
    },
    async getOriginalMovies() {
      const res = await getOriginalMoviesUseCase.execute()
      if (res.isLeft()) {
        return alert('Ocorreu um erro')
      }
      this.originalMovie = res.value.getValue()
    },
  },
})
</script>