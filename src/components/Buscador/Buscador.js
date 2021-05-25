import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Buscador.css';

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
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{' '}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div className="list-container">
          <ul>
            {this.props.moviesLoaded.length !== 0 &&
              this.props.moviesLoaded[0].hasOwnProperty('Response') && (
                <li>¡No hubo resultados!</li>
              )}
            {this.props.moviesLoaded.length !== 0 &&
              !this.props.moviesLoaded[0].hasOwnProperty('Response') &&
              this.props.moviesLoaded.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                    <button
                      onClick={(e) =>
                        this.handleAdd(e, {
                          title: movie.Title,
                          id: movie.imdbID,
                        })
                      }
                    >
                      ♥
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
