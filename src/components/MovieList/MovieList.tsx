import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../api';
import s from './MovieList.css';

export const MovieList = ({ list }: { list: IMovie[] }) => {
  const [queryFilter, setQueryFilter] = useState('');
  const handleInputChange = ({ target: { value } }: any) => setQueryFilter(value);

  const filteredList = queryFilter
    ? list.filter(movie => movie.title.toLowerCase().includes(queryFilter.toLowerCase()))
    : list;

  return (
    <div className={s.movieList}>
      <input
        type="text"
        placeholder="Filter movies by name..."
        data-testid="filter-input"
        onChange={handleInputChange}
      />

      {filteredList.length > 0 ? (
        <ul>
          {filteredList.map(movie => (
            <li key={movie.id} data-testid="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <figure>
                  <img src={`https://image.tmdb.org/t/p/w200/${movie.posterPath}`} />
                  <small className={s.movieRating}>6</small>
                  <figcaption data-testid="movie-title">{movie.title}</figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.comment} data-testid="empty-message">
          No results...
        </div>
      )}
    </div>
  );
};
