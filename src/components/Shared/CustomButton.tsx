import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  onClick: () => void;
  buttonName: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  buttonName,
  ...props
}) => {
  return (
    <Button
      bgColor="teal.500"
      _hover={{ bg: "teal.700" }}
      color="white"
      minW={["500px", "300px"]}
      minH={["100px", "50px"]}
      fontSize={["4xl", "lg"]}
      my={8}
      onClick={onClick}
      {...props}
    >
      {buttonName}
    </Button>
  );
};

export default CustomButton;
