// @ts-ignore
import fetch from 'unfetch';
import { IMovieDbResponse } from '../types/app';

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  year: string;
  backdropPath: string;
  posterPath: string;
  voteAvg: number;
  releaseDate: string;
  language: string;
}

export const fetchData = (): Promise<IMovie[]> =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${process.env.API_KEY}`
  )
    .then((r: any) => r.json())
    .then(({ results }: IMovieDbResponse) => {
      return results.map(movie => ({
        title: movie.title,
        id: movie.id,
        overview: movie.overview,
        year: movie.release_date.split('-')[0],
        backdropPath: movie.backdrop_path,
        posterPath: movie.poster_path,
        voteAvg: movie.vote_average,
        releaseDate: movie.release_date,
        language: movie.original_language,
      }));
    });

export const getMovieById = (list: IMovie[]) => (movieId: number) =>
  list.find(movie => movie.id === movieId);
