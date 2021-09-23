import { MoviesService } from '../../services/MoviesService';
import { GetPopularMoviesUseCase } from './GetPopularMoviesUseCase';
import { HttpAdapter } from '@/app/core/adapter/HttpAdapter';

const httpAdapter = new HttpAdapter();

const moviesService = new MoviesService(httpAdapter);
const getPopularMoviesUseCase = new GetPopularMoviesUseCase(moviesService);

export { getPopularMoviesUseCase };
