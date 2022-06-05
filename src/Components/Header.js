import { Center, Image, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SpaceBackground from "../Assets/Images/space-background.jpg";
import StarwarsLogo from "../Assets/Images/starwars-logo.png";

export default function Header() {
  return (
    <Box h="150" minW="100%" overflow="hidden" position="relative">
      <Link to="/">
        <Image src={SpaceBackground} position="absolute" />
        <Center>
          <Image
            src={StarwarsLogo}
            position="absolute"
            mt="150"
            h="150"
            objectFit="cover"
          />
        </Center>
      </Link>
    </Box>
  );
}
