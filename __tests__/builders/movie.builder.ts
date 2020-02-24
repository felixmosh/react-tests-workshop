import { IMovie } from '../../src/api';

export class MovieBuilder {
  private data: IMovie = {} as any;

  public withId(id: number) {
    this.data.id = id;
    return this;
  }

  public withTitle(title: string) {
    this.data.title = title;
    return this;
  }

  public withLanguage(lang: string) {
    this.data.language = lang;
    return this;
  }

  public withOverview(overview: string) {
    this.data.overview = overview;
    return this;
  }

  public withPosterPath(posterPath: string) {
    this.data.posterPath = posterPath;
    return this;
  }

  public withBackdropPath(backdropPath: string) {
    this.data.backdropPath = backdropPath;
    return this;
  }

  public withReleaseDate(releaseDate: string) {
    this.data.releaseDate = releaseDate;
    return this;
  }

  public withVoteAvg(voteAvg: number) {
    this.data.voteAvg = voteAvg;
    return this;
  }

  public withYear(year: string) {
    this.data.year = year;
    return this;
  }

  public get() {
    return this.data;
  }
}

export function aMovieList(numOfMovies = 3) {
  return Array.from(new Array(numOfMovies)).map((_, i) =>
    new MovieBuilder()
      .withId(i + 1)
      .withTitle(`movie-${i + 1}`)
      .withLanguage('en')
      .withOverview('movie-overview')
      .withBackdropPath('')
      .withPosterPath('')
      .withVoteAvg(Math.round(Math.random() * 9.5))
      .withReleaseDate(`${2020 - i}-0${i + 2}-01`)
      .withYear(`${2020 - i}`)
      .get()
  );
}
