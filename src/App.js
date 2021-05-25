import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Favorites from './components/Favorites/Favorites';
import Buscador from './components/Buscador/Buscador';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Movie from './components/Movie/Movie';
import * as actionsCreators from './actions/index';

function App(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Buscador
            moviesLoaded={props.moviesLoaded}
            getMovies={props.getMovies}
            addMovieFavorite={props.addMovieFavorite}
          />
        </Route>
        <Route path="/favs">
          <Favorites
            movies={props.movies}
            removeMovieFavorite={props.removeMovieFavorite}
          />
        </Route>
        <Route
          path="/movie/:id"
          render={({ match }) => (
            <Movie
              getMovieDetail={props.getMovieDetail}
              cleanMovieDetail={props.cleanMovieDetail}
              movieDetail={props.movieDetail}
              id={match.params.id}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    moviesLoaded: state.moviesLoaded,
    movieDetail: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
