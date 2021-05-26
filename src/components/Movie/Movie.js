import React from 'react';

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
      <div className="container-fluid" style={{ 'maxWidth': '850px' }}>
        <div className="card text-white bg-dark mt-5 mb-5 ps-2 pe-2">
          <div className="row">
            <div className="col-12 col-sm-5 text-center">
              <img
                className="img-fluid"
                src={
                  movie.Poster === 'N/A'
                    ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vintage_Argus_Cinemax_85E_8mm_Zoom_Movie_Camera%2C_Made_In_Japan%2C_Circa_1963_%2827187604204%29.jpg/1200px-Vintage_Argus_Cinemax_85E_8mm_Zoom_Movie_Camera%2C_Made_In_Japan%2C_Circa_1963_%2827187604204%29.jpg'
                    : movie.Poster
                }
                alt="Movie poster"
              />
            </div>
            <div className="col-12 pt-4 lh-base col-sm-7 text-center">
              <h2 className="title">{movie.Title || 'Cargando...'}</h2>
              <h4 className="title">
                <span className="badge bg-info text-dark">{movie.Year}</span>
              </h4>
              <p className="description">{movie.Plot}</p>
              <ul className="list-unstyled">
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
