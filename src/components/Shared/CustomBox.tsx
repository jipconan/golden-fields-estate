import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

// CustomFlex component for consistent flex styling
const CustomBox: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    align="center"
    justify="center"
    textAlign="start"
    color="black"
    w="100%"
    h="100%"
    minH={[null, 0]}
    py={0}
    {...props}
  >
    {children}
  </Box>
);

export default CustomBox;
