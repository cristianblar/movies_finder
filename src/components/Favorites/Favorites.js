import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

export default class ConnectedList extends Component {
  handleRemove(event, id) {
    event.preventDefault();
    this.props.removeMovieFavorite(id);
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        {this.props.movies.length === 0 && (
          <h4 className="noMovies-message">
            ¡No has agregado películas favoritas aún!
          </h4>
        )}
        <div className="list-container">
          <ul>
            {this.props.movies.length !== 0 &&
              this.props.movies.map((movie) => {
                return (
                  <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    <button onClick={(e) => this.handleRemove(e, movie.id)}>
                      X
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
