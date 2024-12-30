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
      minW={["200px", "20em"]}
      minH={["60px", "50px", "50px", "60px", "80px"]}
      fontSize={["20px", "lg", "lg", "xl", "3xl"]}
      my={8}
      onClick={onClick}
      {...props}
    >
      {buttonName}
    </Button>
  );
};

export default CustomButton;
