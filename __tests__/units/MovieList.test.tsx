import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IMovie } from '../../src/api';
import { MovieList } from '../../src/components/MovieList/MovieList';
import { aMovieList } from '../builders/movie.builder';

describe('<MovieList />', () => {
  it('should render movie list', () => {
    const movieList: IMovie[] = aMovieList(1);
    render(
      <MemoryRouter>
        <MovieList list={movieList} />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('movie-card')).toHaveLength(movieList.length);
  });

  it('should render empty message', () => {
    render(
      <MemoryRouter>
        <MovieList list={[]} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('empty-message').textContent).toBe('No results...');
  });

  describe('filter by title', () => {
    let movieList: IMovie[];

    beforeEach(() => {
      movieList = aMovieList();
      render(
        <MemoryRouter>
          <MovieList list={movieList} />
        </MemoryRouter>
      );
    });

    it('should allow filter movies by title', () => {
      fireEvent.change(screen.getByTestId('filter-input'), {
        target: { value: movieList[1].title },
      });

      expect(screen.getAllByTestId('movie-card')).toHaveLength(1);
      expect(screen.getByTestId('movie-title').textContent).toBe(movieList[1].title);
    });

    it('should show no results on non exists query', () => {
      fireEvent.change(screen.getByTestId('filter-input'), {
        target: { value: 'none-exists-title' },
      });

      expect(screen.getByTestId('empty-message')).toBeTruthy();
    });
  });
});
