import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      movie.imageFg = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
      movie.imageBg =
        "https://image.tmdb.org/t/p/original/" + movie.poster_path;

      //console.log("movie.imageFg", movie.imageFg);
      //console.log("movie.imageBg", movie.imageBg);

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
        >
          <img src={movie.imageFg} alt='' />
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
