import { AppError } from '@/app/core/base/AppError'
import { Either } from '@/app/core/base/Either'
import { Result } from '@/app/core/base/Result'
import { MoviesCollection } from '../../models/MoviesCollection'

export namespace GetMovieByIdDTO {
  export type Request = MoviesCollection.GetMoviesById.Input

  export interface ResponseProps {
    title: string
    vote_average: number
    release_date: string
    overview: string
    genres: MoviesCollection.GetMoviesById.Genres[]
    poster_path: string
    backdrop_path: string
  }

  export interface ResponseBody extends ResponseProps {}

  export type Response = Either<AppError.UnexpectedError, Result<ResponseBody>>
}
