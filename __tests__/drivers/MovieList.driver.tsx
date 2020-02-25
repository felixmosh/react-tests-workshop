import { fireEvent, render, RenderResult } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IMovie } from '../../src/api';
import { MovieList } from '../../src/components/MovieList/MovieList';
import { MovieCardDriver } from './MovieCard.driver';

export class MovieListDriver {
  private movieList: IMovie[];
  private component: RenderResult;

  public given = {
    movieList: (list: IMovie[]) => {
      this.movieList = list;
      return this;
    },
  };

  public get = {
    movieCards: () => {
      return this.component
        .getAllByTestId('movie-card')
        .map(element => new MovieCardDriver(element));
    },
    emptyMessage: () => {
      return this.component.getByTestId('empty-message').textContent;
    },
    filterInput: () => {
      return this.component.getByTestId('filter-input');
    },
  };

  public when = {
    render: () => {
      this.component = render(
        <MemoryRouter>
          <MovieList list={this.movieList} />
        </MemoryRouter>
      );
    },
    filterBy: (query: string) => {
      fireEvent.change(this.get.filterInput(), {
        target: { value: query },
      });
      return this;
    },
  };
}
