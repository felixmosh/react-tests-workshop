import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IMovie } from '../src/api';
import { MovieList } from '../src/components/MovieList/MovieList';

describe('<MovieList />', () => {
  it('should render movie list', () => {
    const movieList: IMovie[] = [
      {
        id: 1,
        title: 'title',
        language: 'en',
        year: '2020',
        overview: '',
        voteAvg: 6,
        posterPath: '',
        backdropPath: '',
        releaseDate: '2020-10-20',
      },
    ];
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
});
