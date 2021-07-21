import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { dataContext } from '../../dataContext';
import s from './MovieDetails.css';

export const MovieDetails = () => {
  const { getMovieById } = useContext(dataContext);
  const { id } = useParams();
  const movie = getMovieById(parseInt(id, 10));

  if (!movie) {
    return null;
  }

  return (
    <section className={s.movieDetails}>
      <div
        className={s.heroHeader}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdropPath})` }}
      >
        <div className={s.heroContainer}>
          <figure className={s.moviePoster}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} />
            <figcaption>
              <h2 data-testid="movie-title">
                {movie.title} <span>{movie.year}</span>
              </h2>
            </figcaption>
          </figure>
          <ul className={s.additionalData}>
            <li>
              {movie.voteAvg}
              <span>Rating</span>
            </li>
            <li>
              {new Date(movie.releaseDate).toLocaleDateString()}
              <span>Release Date</span>
            </li>
            <li>
              {movie.language.toUpperCase()}
              <span>Language</span>
            </li>
          </ul>
          <p className={s.description} data-testid="movie-description">
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  );
};
