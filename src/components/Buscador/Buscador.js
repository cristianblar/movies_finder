import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }
  handleAdd(event, movie) {
    event.preventDefault();
    this.props.addMovieFavorite(movie);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="pt-4 pb-4 container-fluid bg-light">
        <h1 className="display-1">
          Finder{' '}
          <span role="img" aria-label="magnifier">
            🔍
          </span>
        </h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-floating mb-3">
            <input
              className="form-control pe-4"
              type="text"
              id="floatingInput"
              autoComplete="off"
              required
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="floatingInput">Movie</label>
          </div>
          <button className="btn btn-primary btn-lg mb-4" type="submit">
            SEARCH
          </button>
        </form>
        <div className="container-fluid">
          <ul className="list-unstyled">
            {this.props.moviesLoaded.length !== 0 &&
              this.props.moviesLoaded[0].hasOwnProperty('Response') && (
                <li className="text-danger">No movies found!</li>
              )}
            {this.props.moviesLoaded.length !== 0 &&
              !this.props.moviesLoaded[0].hasOwnProperty('Response') &&
              this.props.moviesLoaded.map((movie) => {
                return (
                  <div key={movie.imdbID} className="container-fluid">
                    <div className="row mb-3">
                      <div className="col-8">
                        <li>
                          <Link
                            className="link-secondary"
                            to={`/movie/${movie.imdbID}`}
                          >
                            {movie.Title}
                          </Link>
                        </li>
                      </div>
                      <div className="col-4">
                        <button
                          disabled={
                            this.props.favoriteMovies.find(
                              (peli) => movie.imdbID === peli.id
                            )
                              ? true
                              : false
                          }
                          type="button"
                          className="btn btn-dark btn-sm"
                          onClick={(e) =>
                            this.handleAdd(e, {
                              title: movie.Title,
                              id: movie.imdbID,
                            })
                          }
                        >
                          ♥
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
