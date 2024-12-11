import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

// CustomFlex component for consistent flex styling
const CustomFlex: React.FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    align="center"
    justify="center"
    textAlign="center"
    color="black"
    w="100%"
    h="100%"
    py={0}
    {...props}
  >
    {children}
  </Flex>
);

export default CustomFlex;
