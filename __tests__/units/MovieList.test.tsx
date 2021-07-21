import React from 'react';
import { IMovie } from '../../src/api';
import { aMovieList } from '../builders/movie.builder';
import { MovieListDriver } from '../drivers/MovieList.driver';

describe('<MovieList />', () => {
  let driver: MovieListDriver;
  beforeEach(() => {
    driver = new MovieListDriver();
  });

  it('should render movie list', () => {
    const movieList: IMovie[] = aMovieList(1);
    driver.given.movieList(movieList).when.render();

    expect(driver.get.movieCards()).toHaveLength(movieList.length);
  });

  it('should render empty message', () => {
    driver = new MovieListDriver();
    driver.given.movieList([]).when.render();

    expect(driver.get.emptyMessage()).toBe('No results...');
  });

  describe('filter by title', () => {
    let movieList: IMovie[];
    let screen: any;

    beforeEach(() => {
      movieList = aMovieList();
      driver.given.movieList(movieList).when.render();
    });

    it('should allow filter movies by title', () => {
      driver.when.filterBy(movieList[1].title);
      const cards = driver.get.movieCards();

      expect(cards).toHaveLength(1);
      expect(cards[0].get.title()).toBe(movieList[1].title);
    });

    it('should show no results on non exists query', () => {
      driver.when.filterBy('none-exists-title');

      expect(driver.get.emptyMessage()).toBeTruthy();
    });
  });
});
