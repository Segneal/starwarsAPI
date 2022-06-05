import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        backgroundImage: "url(background-stars.jpeg)",
        fontFamily: "DIN, Helvetica, Arial, sans-serif",
      },
    },
  },
});

export default theme;
