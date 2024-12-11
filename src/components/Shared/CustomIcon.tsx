import { ClickableIconProps } from "../../types/generalTypes";
import { Flex, Image, Heading } from "@chakra-ui/react";

// CustomIcon component for consistent icon styling
const CustomIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  heading,
  imageProps,
  headingProps,
}) => (
  <Flex direction="column" align="center" justify="center" h="auto" w="auto">
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      h="auto"
      w="auto"
      {...imageProps}
    />
    <Heading
      h="auto"
      w="auto"
      fontWeight="300"
      mt={8}
      textAlign="center"
      {...headingProps}
    >
      {heading}
    </Heading>
  </Flex>
);

export default CustomIcon;
