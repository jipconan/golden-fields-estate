// Section1.tsx
import { Box } from "@chakra-ui/react";
import { landingPageData } from "../../../data/HomePageData";
import { ImageAsset } from "../../../types/generalTypes";
import {
  CustomIcon,
  CustomHeader,
  CustomBox,
  CustomFlex,
} from "../../../components/Shared";

const Section1: React.FC = () => (
  <CustomBox
    backgroundImage={landingPageData.pageImage.imageAsset?.image}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    h={["1600px", "100vh"]}
    minH={[null, "600px"]}
  >
    <CustomFlex
      direction="column"
      justify={["center", "space-between"]}
      py={["30%", "4%"]}
    >
      {/* Landing Page - Title */}
      <CustomHeader
        fontSize={["150px", "8xl"]}
        fontWeight="700"
        fontFamily="cormorantSc"
        textShadow={[
          "8px 12px 15px rgba(0, 0, 0, 0.85)",
          "4px 4px 5px rgba(0, 0, 0, 0.5)",
        ]}
        textAlign="center"
        color="white"
        w="100%"
      >
        {landingPageData.pageTitle?.heading}
      </CustomHeader>

      {/* Icon Section */}
      <CustomFlex position="relative" h="auto" w={["90%", "70%"]}>
        {/* Icon Section - white line */}
        <Box
          position="absolute"
          h={["1px", "2px"]}
          w="90%"
          bg="white"
          top="25%"
          zIndex="0"
        />

        {/* Icon Section - row of icons */}
        <CustomFlex
          position="relative"
          justify="space-between"
          h="auto"
          w="100%"
          zIndex="1"
        >
          {landingPageData.pageIcons?.imageAssets?.map(
            (icon: ImageAsset, index: number) => (
              <CustomIcon
                key={index}
                src={icon.image}
                alt={icon.alt}
                heading={icon.heading}
                imageProps={{
                  p: [4, 2, 2],
                  bg: "iconGreen",
                  blockSize: ["150px", "100px"],
                }}
                headingProps={{
                  size: ["2xl", "lg"],
                  w: ["180px", "140px"],
                  color: "white",
                  bgColor: "rgba(0, 0, 0, 0.5)",
                }}
              />
            )
          )}
        </CustomFlex>
      </CustomFlex>
    </CustomFlex>
  </CustomBox>
);

export default Section1;
