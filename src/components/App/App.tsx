import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchData, getMovieById } from '../../api';
import { dataContext } from '../../dataContext';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import './App.css';

export const App = () => {
  const [data, setList] = useState({ list: [], getMovieById: getMovieById([]) });

  useEffect(() => {
    fetchData().then(list => setList({ list, getMovieById: getMovieById(list) }));
  }, []);

  return (
    <dataContext.Provider value={data}>
      <Header />
      <main>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </dataContext.Provider>
  );
};
