import { Circle } from "@chakra-ui/react";
import { Section2Data } from "../../data/HomePageData";
import { useState } from "react";
import {
  CustomHeader,
  CustomText,
  CustomImage,
  CustomBox,
  CustomFlex,
} from "../Shared";

const FeatureProperties: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <CustomFlex direction="column" w={["95%", "85%", "85%", "100%"]}>
      {/* Title & Description */}
      <CustomFlex direction="column" textAlign="center">
        <CustomHeader
          textAlign="center"
          fontWeight="700"
          color="black"
          fontSize={["50px", "6xl", "6xl", "9xl"]}
          lineHeight="0.85"
          my={8}
        >
          {Section2Data.pageTitle?.heading}
        </CustomHeader>
        <CustomText
          textAlign="center"
          fontWeight="300"
          color="black"
          lineHeight="1.4"
          fontSize={["20px", "xl", "xl", "3xl"]}
          textOverflow="clip"
          mb={4}
        >
          {Section2Data.pageText?.text}
        </CustomText>
      </CustomFlex>

      {/* Image Gallery */}
      <CustomFlex direction="column" gap={8}>
        {/* Gallery Images */}
        <CustomFlex
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          w={["65%", "90%", "90%", "80%"]}
          my={[8, 4]}
        >
          {Section2Data.pageGalleryImages.imageAssets?.map(
            (imageAsset, index) => (
              <CustomBox
                key={index}
                transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                zIndex={selectedIndex === index ? 2 : 1}
                transform={
                  selectedIndex === index
                    ? ["scale(1.2)", "scale(1.2)", "scale(1.3)"]
                    : "scale(1.0)"
                }
              >
                <CustomImage
                  src={imageAsset.image}
                  alt={imageAsset.alt}
                  blockSize={["120px", "6em", "8em", "16em"]}
                  transition="transform 0.3s ease-in-out"
                />
              </CustomBox>
            )
          )}
        </CustomFlex>

        {/* Circle Indicators */}
        <CustomFlex direction="row" gap={[8, 8, 12]} mb={12}>
          {Section2Data.pageGalleryImages.imageAssets?.map((_, index) => (
            <Circle
              key={index}
              size={["20px", "0.8em", "1em"]}
              bg={selectedIndex === index ? "blue.500" : "gray.300"}
              cursor="pointer"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </CustomFlex>
      </CustomFlex>
    </CustomFlex>
  );
};

export default FeatureProperties;
