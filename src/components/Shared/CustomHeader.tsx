import { Heading, HeadingProps } from "@chakra-ui/react";

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="start"
    color="black"
    w="100%"
    h="100%"
    whiteSpace="pre-wrap"
    {...props}
  />
);

export default CustomHeader;
