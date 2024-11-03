import {
  Flex,
  Heading,
  HeadingProps,
  Text,
  Image,
  Box,
  Circle,
} from "@chakra-ui/react";
import { ClickableIconProps } from "../../types/generalTypes";
import { Section2Data } from "../../data/HomePageData";
import { useState } from "react";

// CustomHeader component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="center"
    fontWeight="700"
    color="black"
    fontSize={["120px", "8xl", "8xl"]}
    h="auto"
    w="auto"
    {...props}
  />
);

// CustomText component for consistent text styling
const CustomText: React.FC<HeadingProps> = (props) => (
  <Text
    textAlign="center"
    fontWeight="300"
    color="black"
    lineHeight="1.4"
    h="auto"
    w="auto"
    fontSize={["50px", "lg", "3xl"]}
    textOverflow="clip"
    mb={4}
    maxW="85%"
    {...props}
  />
);

// CustomImage component for consistent icon styling
const CustomImage: React.FC<ClickableIconProps> = ({
  src,
  alt,
  ...imageProps
}) => (
  <Image
    src={src}
    alt={`Gallery image ${Number(alt) + 1}`}
    objectFit="cover"
    w="100%"
    h="100%"
    blockSize={["600px", "200px", "250px"]}
    transition="transform 0.3s ease-in-out"
    {...imageProps}
  />
);

const FeatureProperties: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      my={[24, 0]}
    >
      {/* Title & Description */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        w="100%"
        h="100%"
        m={8}
      >
        <CustomHeader>{Section2Data.pageTitle?.heading}</CustomHeader>
        <CustomText>{Section2Data.pageText?.text}</CustomText>
      </Flex>

      {/* Image Gallery */}
      <Flex direction="column" align="center" w="100%" h="100%" gap={8}>
        {/* Gallery Images */}
        <Flex
          direction="row"
          justify={["center", "center", "space-between"]}
          w={["80%", "80%", "80%"]}
          h="100%"
          my={[48, 2, 8]}
        >
          {Section2Data.pageGalleryImages.imageAssets?.map(
            (imageAsset, index) => (
              <Box
                w="100%"
                h="100%"
                key={index}
                transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                zIndex={selectedIndex === index ? 2 : 1}
                transform={
                  selectedIndex === index
                    ? ["scale(1.3)", "scale(1.2)", "scale(1.3)"]
                    : "scale(1.0)"
                }
              >
                <CustomImage src={imageAsset.image} alt={imageAsset.alt} />
              </Box>
            )
          )}
        </Flex>

        {/* Circle Indicators */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          gap={[24, 12, 4]}
          my={4}
        >
          {Section2Data.pageGalleryImages.imageAssets?.map((_, index) => (
            <Circle
              key={index}
              size={["40px", "24px", "16px"]}
              bg={selectedIndex === index ? "blue.500" : "gray.300"}
              cursor="pointer"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeatureProperties;