import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'League Spartan', serif",
    body: "'League Spartan', serif",
    cormorantSc: "'Cormorant SC', serif",
  },
  colors: {
    customGray: "#414141",
    iconGreen: "#1F8787",
  },
});

export default theme;
