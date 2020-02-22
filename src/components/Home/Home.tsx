import React, { useContext } from 'react';
import { dataContext } from '../../dataContext';
import { MovieList } from '../MovieList/MovieList';
import s from './Home.css';

export const Home = () => {
  const { list } = useContext(dataContext);

  return (
    <div className={s.home}>
      <h2>Top Movies</h2>
      <MovieList list={list} />
    </div>
  );
};
