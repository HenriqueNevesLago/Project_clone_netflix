import { MoviesService } from '../../services/MoviesService';
import { GetOriginalMoviesUseCase } from './GetOriginalMoviesUseCase';
import { HttpAdapter } from '@/app/core/adapter/HttpAdapter';

//TODO: import dependencies here
const httpAdapter = new HttpAdapter();
const moviesService = new MoviesService(httpAdapter);
const getOriginalMoviesUseCase = new GetOriginalMoviesUseCase(moviesService);

export { getOriginalMoviesUseCase };
