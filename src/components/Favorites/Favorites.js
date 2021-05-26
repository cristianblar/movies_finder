import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ConnectedList extends Component {
  handleRemove(event, id) {
    event.preventDefault();
    this.props.removeMovieFavorite(id);
  }

  render() {
    return (
      <div className="pt-4 pb-4 container-fluid bg-light">
        <h2 className="display-2">
          Favorite movies{' '}
          <span role="img" aria-label="Green heart">
            💚
          </span>
        </h2>
        {this.props.movies.length === 0 && (
          <div className="mt-5">
            <h4 className="noMovies-message">
              ¡No has agregado películas favoritas aún!
            </h4>
          </div>
        )}
        <div className="container-fluid mt-5">
          <ul className="list-unstyled">
            {this.props.movies.length !== 0 &&
              this.props.movies.map((movie) => {
                return (
                  <div key={movie.id} className="container-fluid">
                    <div className="row mb-3">
                      <div className="col-6">
                        <li>
                          <Link
                            className="link-success"
                            to={`/movie/${movie.id}`}
                          >
                            {movie.title}
                          </Link>
                        </li>
                      </div>
                      <div className="col-6">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={(e) => this.handleRemove(e, movie.id)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
