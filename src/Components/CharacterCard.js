import React from "react";
import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import charData from "../Assets/paths/charactersData";
export default function CharacterCard(props) {
  let person = props.char[0];
  let findCharacter = charData.find((item) => item.id === props.char[0].name);

  return (
    <Box>
      <Flex
        mt="50"
        alignItems="center"
        justifyContent="center"
        w="600"
        _hover={{ borderColor: "#555555" }}
      >
        <Box
          h="800"
          width="1000"
          border="1px solid gray.100"
          borderRadius="5px"
          borderStyle="solid"
          borderColor="#343434"
          borderWidth="0.5px"
          bgColor="#090909"
          color="white"
        >
          <Flex textAlign="center" h="370" position="relative">
            <Image
              position="absolute"
              objectFit="cover"
              src={findCharacter.url}
              borderBottom="2px solid #FFE81F"
            />
          </Flex>
          <Heading textAlign="center" pt="10" textShadow="2px 4px 15px black">
            {findCharacter.id.toUpperCase()}
          </Heading>
          <Heading mt="5" as="h2" fontSize="16px" textAlign="center">
            {`Gender: ${person.gender} - Weight: ${person.mass}kg - Height: ${person.height}`}
          </Heading>

          <Container pt="10">{findCharacter.bio}</Container>
        </Box>
      </Flex>
    </Box>
  );
}
