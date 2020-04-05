import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getMovieRows } from "../getMovie";
import { fetchTrending } from "../store/actions/index";

import Slider from "../components/NetflixSlider";

class TrendingMoviesSlider extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    let movies;

    // Call getMoviesRows function only when we get the data back
    // from the API through redux
    if (this.props.trending.data) {
      //console.log("this.props.movies.data", this.props.movies.data);
      //console.log(movies[0].props);
      movies = this.props.trending.data;
      console.log("movies", movies);

      return (
        <>
          <h1 className='movieShowcase__heading'>Trending Movies</h1>
          <Slider>
            {movies &&
              movies.map((movie) => (
                <Slider.Item movie={movie} key={movie.id}>
                  Trending Movies Slider
                </Slider.Item>
              ))}
          </Slider>
        </>
      );
    } else return null;
  }
}

const mapStateToProps = (state) => {
  return { trending: state.trending };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTrending }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingMoviesSlider);
