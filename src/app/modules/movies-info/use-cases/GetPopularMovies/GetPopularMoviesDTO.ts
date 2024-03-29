import { AppError } from '@/app/core/base/AppError'
import { Either } from '@/app/core/base/Either'
import { Result } from '@/app/core/base/Result'

export namespace GetPopularMoviesDTO {
  export interface ResponseProps {
    title: string
    vote_average: number
    release_date: string
    seasons?: number
    overview: string
    genre_ids: Array<number>
    poster_path: string
    backdrop_path: string
  }

  export interface ResponseBody extends Array<ResponseProps> {}

  export type Response = Either<AppError.UnexpectedError, Result<ResponseBody>>
}
