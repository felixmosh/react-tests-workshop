import React from 'react';
import { IMovie } from './api';

export const dataContext = React.createContext<{
  list: IMovie[];
  getMovieById: (movieId: number) => IMovie;
}>(null);
