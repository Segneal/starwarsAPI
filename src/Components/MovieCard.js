import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

//shows movie data on focus
export default function MovieCard({ movie }) {
  return (
    <Flex w="600" justifyContent="center">
      <Flex w="600" h="500" background="black" borderRadius="0 25">
        <Image src={movie.url} borderRight="1px solid #ffe81f" />
        <Box>
          <Heading mt="10" color="#ffe81f" ml="5" as="h1">
            {movie.name}
          </Heading>
          <Container mt="50" color="whitesmoke">
            {movie.summary}
          </Container>
        </Box>
      </Flex>
    </Flex>
  );
}
