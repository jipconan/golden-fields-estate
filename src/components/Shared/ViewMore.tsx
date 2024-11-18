import React from "react";
import { Button } from "@chakra-ui/react";

const ViewMoreButton: React.FC = () => {
  return (
    <Button
      bgColor="teal.500"
      _hover={{ bg: "teal.700" }}
      color="white"
      minW="300px"
      minH="50px"
      fontSize="lg"
      my={8}
    >
      View More
    </Button>
  );
};

export default ViewMoreButton;
