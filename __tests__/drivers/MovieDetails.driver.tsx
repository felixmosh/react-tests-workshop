import { render, RenderResult } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IMovie } from '../../src/api';
import { MovieDetails } from '../../src/components/MovieDetails/MovieDetails';
import { dataContext } from '../../src/dataContext';

export class MovieDetailsDriver {
  private movieList: IMovie[];
  private movieId: number;
  public given = {
    movieList: (list: IMovie[]) => {
      this.movieList = list;
      return this;
    },
    movieId: (movieId: number) => {
      this.movieId = movieId;
      return this;
    },
  };
  private component: RenderResult;
  public get = {
    title: () => this.component.getByTestId('movie-title'),
  };

  public when = {
    render: () => {
      this.component = render(
        <MemoryRouter initialEntries={[{ pathname: `/movie/${this.movieId}` }]}>
          <dataContext.Provider
            value={{
              list: this.movieList,
              getMovieById: (movieId) => this.movieList.find((movie) => movie.id === movieId),
            }}
          >
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
          </dataContext.Provider>
        </MemoryRouter>
      );
    },
  };
}
