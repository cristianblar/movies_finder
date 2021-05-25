import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  CLEAN_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from '../actionTypes';

// ACTION CREATORS:

// Requiere API... (middleware)
export function getMovies(titulo) {
  // Retorna función para uso de Redux Thunk
  return (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=20dac387&s=${titulo}`)
      .then((response) => response.json())
      .then((peliculas) => dispatch({ type: GET_MOVIES, payload: peliculas }));
  };
}

// Requiere API...
export function getMovieDetail(id) {
  // Retorna función para uso de Redux Thunk
  return (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then((response) => response.json())
      .then((pelicula) =>
        dispatch({ type: GET_MOVIE_DETAIL, payload: pelicula })
      );
  };
}

// Usa payload para alojar la película a agregar
export function addMovieFavorite(payload) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload,
  };
}

// Usa payload para identificar la película a eliminar
export function removeMovieFavorite(payload) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload, // id
  };
}

export function cleanMovieDetail() {
  return {
    type: CLEAN_MOVIE_DETAIL,
  };
}
