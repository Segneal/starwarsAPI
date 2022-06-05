import {  Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

import moviesData from "../Assets/paths/moviesData";

export default function MoviesSlider(props) {
  const showMovieSocal = () => {
    return moviesData.map((movie) => {
      return (
        <Flex
          w="50"
          overflow="hidden"
          _hover={{ border: "2px solid white" }}
          key={movie.id}
          borderColor="2px solid #454545"
          onClick={() => props.chooseMovie(movie.id)}
        >
          <Image src={movie.url}></Image>
        </Flex>
      );
    });
  };

  return (
    <Flex pt="25" justifyContent="center" h="200" w="100%" objectFit="resize">
      {showMovieSocal()}
    </Flex>
  );
}
