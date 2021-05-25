import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  CLEAN_MOVIE_DETAIL,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      if (action.payload.Response === 'True') {
        return {
          ...state,
          moviesLoaded: action.payload.Search,
        };
      } else {
        return {
          ...state,
          moviesLoaded: [{ Response: action.payload.Response }],
        };
      }

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case CLEAN_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {},
      };

    default:
      return state;
  }
};
