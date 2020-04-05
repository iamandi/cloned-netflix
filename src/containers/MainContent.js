import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";

import Slider from "../components/NetflixSlider";

import TrendingMovies from "./TrendingMovies";
import NetflixOriginals from "./NetflixOriginals";
import TopRated from "./TopRated";
import ActionMovies from "./ActionMovies";
import ComedyMovies from "./ComedyMovies";
import HorrorMovies from "./HorrorMovies";
import RomanceMovies from "./RomanceMovies";
import Documentaries from "./Documentaries";

import RomanceMoviesSlider from "./RomanceMoviesSlider";
import TrendingMoviesSlider from "./TrendingMoviesSlider";

const movies1 = [
  {
    id: 1,
    poster_path: "../static/images/slide1.jpg",
    backdrop_path: "../static/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    poster_path: "../static/images/slide2.jpg",
    backdrop_path: "../static/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    poster_path: "../static/images/slide3.jpg",
    backdrop_path: "../static/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    poster_path: "../static/images/slide4.jpg",
    backdrop_path: "../static/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    poster_path: "../static/images/slide5.jpg",
    backdrop_path: "../static/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    poster_path: "../static/images/slide6.jpg",
    backdrop_path: "../static/images/slide6b.webp",
    title: "Black mirror",
  },
  {
    id: 7,
    poster_path: "../static/images/slide3.jpg",
    backdrop_path: "../static/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 8,
    poster_path: "../static/images/slide4.jpg",
    backdrop_path: "../static/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 9,
    poster_path: "../static/images/slide5.jpg",
    backdrop_path: "../static/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 10,
    poster_path: "../static/images/slide6.jpg",
    backdrop_path: "../static/images/slide6b.webp",
    title: "Black mirror",
  },
];

class MainContent extends Component {
  state = {
    /** Will hold our chosen movie to display on the header */
    selectedMovie: {},
  };

  componentDidMount = () => {
    this.getMovie();
  };

  getMovie = () => {
    /** Movie Id for the Narcos series  */
    const movieId = 63351;
    /** Make Api call to retrieve the details for a single movie  */
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;
    axios
      .get(url)
      .then((res) => {
        const movieData = res.data;
        this.setState({ selectedMovie: movieData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='container'>
        <Header movie={this.state.selectedMovie} />
        <div className='movieShowcase'>
          <TrendingMoviesSlider />

          <NetflixOriginals />
          <TopRated />
          <ActionMovies />
          <RomanceMoviesSlider />
          <ComedyMovies />
          <TrendingMovies />
          <Documentaries />
        </div>
      </div>
    );
  }
}

export default MainContent;
