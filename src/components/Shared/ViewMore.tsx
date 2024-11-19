import React from "react";
import { Button } from "@chakra-ui/react";

interface ViewMoreButtonProps {
  onClick: () => void;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ onClick }) => {
  return (
    <Button
      bgColor="teal.500"
      _hover={{ bg: "teal.700" }}
      color="white"
      minW="300px"
      minH="50px"
      fontSize="lg"
      my={8}
      onClick={onClick}
    >
      View More
    </Button>
  );
};

export default ViewMoreButton;
