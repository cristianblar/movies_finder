import React from 'react';

import './Movie.css';

export default class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.id);
  }

  componentWillUnmount() {
    this.props.cleanMovieDetail();
  }

  render() {
    const movie = this.props.movieDetail;
    return (
      <div className="movie-card">
        <div className="container">
          <h2 className="title">{movie.Title || 'Cargando...'}</h2>
          <h4 className="title">
            <span>{movie.Year}</span>
          </h4>
          <div className="container2">
            <img src={movie.Poster} />
            <div className="container3">
              <p className="description">{movie.Plot}</p>
              <ul>
                <li>
                  <strong>Release date: </strong>
                  {movie.Released}.
                </li>
                <li>
                  <strong>Duration: </strong>
                  {movie.Runtime}.
                </li>
                <li>
                  <strong>Genre: </strong>
                  {movie.Genre}.
                </li>
                <li>
                  <strong>Director(s): </strong>
                  {movie.Director}.
                </li>
                <li>
                  <strong>Writer(s): </strong>
                  {movie.Writer}.
                </li>
                <li>
                  <strong>Actors: </strong>
                  {movie.Actors}.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
