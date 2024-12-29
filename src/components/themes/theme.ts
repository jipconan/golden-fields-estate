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
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    phonesmall: "667px", // Custom breakpoint for iPhone SE landscape
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
    "3xl": "106em", // ~1536px
  },
});

export default theme;
