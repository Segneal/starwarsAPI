import { Flex, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Center h="100hv">
      <Flex
        h="50"
        minWidth="100%"
        borderStyle="solid"
        borderColor="#343434"
        borderWidth="0.5px"
        bgColor="#090909"
        color="yellow"
        fontSize="14"
      >
        <Center h="50" m="auto">
          <Flex
            mr="20"
            borderColor="#343434"
            fontWeight="bold"
            _hover={{ color: "white" }}
          >
            <Link to="/Characters">CHARACTERS</Link>
          </Flex>
          <Flex mr="20" fontWeight="bold" _hover={{ color: "white" }}>
            <Link to="/Movies">MOVIES</Link>
          </Flex>
        </Center>
      </Flex>
    </Center>
  );
}
