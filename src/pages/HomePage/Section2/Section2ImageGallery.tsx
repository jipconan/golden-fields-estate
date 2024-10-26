// Section1.tsx
import { Flex, Image, Box, Circle } from "@chakra-ui/react";
import { ClickableIconProps } from "../../../types/generalTypes";
import { Section2Data } from "../../../data/HomePageData";
import { useState } from "react";

// CustomIcon component for consistent image styling
const CustomImage: React.FC<ClickableIconProps> = ({
  src,
  alt,
  ...imageProps
}) => (
  <Image
    src={src}
    alt={`Gallery image ${Number(alt) + 1}`}
    objectFit="cover"
    w={["70vw", "35vw", "30vw", "25vw"]}
    h={["8vh", "25vh", "35vh", "30vh"]}
    {...imageProps}
  />
);

const Section2ImageGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Flex
      direction="column"
      align="center"
      width="100%"
      maxW="85vw"
      height="100%"
    >
      {/* Gallery Images */}
      <Flex
        direction="row"
        justify={["center", "center", "space-between"]}
        h="100%"
        w="100%"
        gap={[2, 4, 6]}
        mb={[6, 10, 20]}
      >
        {Section2Data.pageGalleryImages.imageAssets?.map(
          (imageAsset, index) => (
            <Box
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
        h="100%"
        w="100%"
        gap={[2, 3, 4]}
        mb={[4, 8, 12]}
      >
        {Section2Data.pageGalleryImages.imageAssets?.map((_, index) => (
          <Circle
            key={index}
            size={["6px", "8px", "10px", "12px"]}
            bg={selectedIndex === index ? "blue.500" : "gray.300"}
            mx={1}
            cursor="pointer"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Section2ImageGallery;
