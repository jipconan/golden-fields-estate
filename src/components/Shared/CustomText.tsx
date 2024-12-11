import { Text, TextProps } from "@chakra-ui/react";

// CustomText component for consistent text styling
const CustomText: React.FC<TextProps> = (props) => (
  <Text
    textAlign="start"
    fontWeight="100"
    color="black"
    lineHeight="1.2"
    w="100%"
    h="100%"
    whiteSpace="pre-wrap"
    {...props}
  />
);

export default CustomText;
