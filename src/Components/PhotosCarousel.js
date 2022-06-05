import { Box, Center } from "@chakra-ui/react";
import React from "react";
import slides from "../Assets/paths/slides";
import "../css/styles.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function PhotosCarousel() {
  let images = slides.map((bgs) => {
    return bgs.url;
  });

  const [image, setImage] = React.useState(images[0]);
  let random = Math.floor(Math.random() * 82);

  return (
    <Center mt="35">
      <Box
        _hover={{ boxShadow: "2px 2px 15px #999E6E" }}
        border="1px solid #343434"
      >
        <SimpleImageSlider
          width={900}
          height={675}
          images={images}
          autoPlay={true}
          autoPlayDelay={5}
          showBullets={true}
          showNavs={true}
        />
      </Box>
    </Center>
  );
}
