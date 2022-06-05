import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import moviesData from "../Assets/paths/moviesData";
import MovieCard from "./MovieCard";
import MoviesSlider from "./MoviesSlider";

export default function DisplayMovies() {
  const [curMovie, setCurMovie] = useState(moviesData[0]);

  const chooseMovie = (id) => {
    setCurMovie(...moviesData.filter((movie) => movie.id === id));
    console.log(curMovie);
  };

  return (
    <Box pt="50">
      <MovieCard movie={curMovie} />
      <MoviesSlider chooseMovie={chooseMovie} />
    </Box>
  );
}
