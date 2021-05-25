import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const initialState = {
  movies: [],
  moviesLoaded: [],
  movieDetail: {},
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, initialState, composedEnhancer);

export default store;
