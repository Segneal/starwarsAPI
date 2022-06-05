import { Box } from "@chakra-ui/react";
import React from "react";
import PhotosCarousel from "./PhotosCarousel";

export default function Home() {
  return (
    <Box h="100hv" color="white">
      <PhotosCarousel />
    </Box>
  );
}
