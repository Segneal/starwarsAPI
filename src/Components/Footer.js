import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import vaderFooter from "../Assets/Images/vaderFooter.png";
export default function Footer() {
  return (
    <Box mt="25" borderTop="1px solid #343434">
      <Box
        mt="25"
        display="flex"
        justifyContent="center"
        h="200"
        boxShadow="dark-lg"
        color="white"
      >
        <Image mt="25" h="150" src={vaderFooter} />
      </Box>
      <Heading fontSize="10" color="whitesmoke">
        copyright @ none
      </Heading>
    </Box>
  );
}
