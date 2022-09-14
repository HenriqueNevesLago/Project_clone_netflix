import { MoviesService } from '../../services/MoviesService';
import { GetMovieByIdUseCase } from './GetMovieByIdUseCase';
import { HttpAdapter } from '@/app/core/adapter/HttpAdapter';

const httpAdapter = new HttpAdapter();

const moviesService = new MoviesService(httpAdapter);

const getMovieByIdUseCase = new GetMovieByIdUseCase(moviesService);

export { getMovieByIdUseCase };
