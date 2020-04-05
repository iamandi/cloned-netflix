import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getMovieRows } from "../getMovie";
import { fetchRomanceMovies } from "../store/actions/index";

import Slider from "../components/NetflixSlider";

const moviesTest = [
  {
    id: 1,
    posterUrl:
      "https://image.tmdb.org/t/p/original/4ErXZZgpXPxDcCLnnLXysK03ss9.jpg",
    imageFg: "/4ErXZZgpXPxDcCLnnLXysK03ss9.jpg",
    imageBg: "/36nD4aDvoFMewiHBnIcGo3vVcd6.jpg",
    title: "1983",
  },
];

class RomanceMoviesSlider extends Component {
  componentDidMount() {
    this.props.fetchRomanceMovies();
  }

  render() {
    let movies;

    // Call getMoviesRows function only when we get the data back
    // from the API through redux
    if (this.props.movies.data) {
      //console.log("this.props.movies.data", this.props.movies.data);
      //console.log(movies[0].props);
      movies = this.props.movies.data;
      console.log("movies", movies);

      return (
        <>
          <h1 className='movieShowcase__heading'>Romance Movies</h1>
          <Slider>
            {movies &&
              movies.map((movie) => (
                <Slider.Item movie={movie} key={movie.id}>
                  Romance Movies Slider
                </Slider.Item>
              ))}
          </Slider>
        </>
      );
    } else return null;
  }
}

const mapStateToProps = (state) => {
  return { movies: state.romance };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRomanceMovies }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RomanceMoviesSlider);
