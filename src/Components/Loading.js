import {  Center,  Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Center>
      <Spinner
        color="#ffe81f"
        mt="50"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
      />
    </Center>
  );
}
