import React from 'react';
import { IMovie } from '../../src/api';
import { aMovieList } from '../builders/movie.builder';
import { MovieDetailsDriver } from '../drivers/MovieDetails.driver';

describe('<MovieDetails />', () => {
  let driver: MovieDetailsDriver;
  let currentMovie: IMovie;

  beforeEach(() => {
    driver = new MovieDetailsDriver();
    const movieList = aMovieList();
    currentMovie = movieList[0];

    driver.given.movieList(movieList).given.movieId(currentMovie.id);

    driver.when.render();
  });

  it('should render movie title', () => {
    expect(driver.get.title().textContent).toContain(currentMovie.title);
  });
});
