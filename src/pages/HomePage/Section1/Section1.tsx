// Section1.tsx
import { Flex, Heading, Image, HeadingProps, Box } from "@chakra-ui/react";
import { landingPageData } from "../../../data/HomePageData";
import { ClickableIconProps, ImageAsset } from "../../../types/generalTypes";

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading textAlign="center" color="white" w="100%" {...props} />
);

// CustomIcon component for consistent icon styling
const CustomIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  heading,
  ...imageProps
}) => (
  <Flex direction="column" align="center" justify="center" h="auto" w="auto">
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      p={[4, 2, 2]}
      bg="iconGreen"
      h="auto"
      w="auto"
      blockSize={["150px", "100px"]}
      {...imageProps}
    />
    <CustomHeader
      size={["2xl", "lg"]}
      h="auto"
      w={["200px", "140px"]}
      fontWeight="300"
      mt={8}
    >
      {heading}
    </CustomHeader>
  </Flex>
);

const Section1: React.FC = () => (
  <Box
    backgroundImage={landingPageData.pageImage.imageAsset?.image}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    w="100%"
    h={["100%", "100vh"]}
    minH={[null, "600px"]}
  >
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      py={["50%", "2%"]}
      w="auto"
      h="100%"
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
      >
        {landingPageData.pageTitle?.heading}
      </CustomHeader>

      {/* Icon Section */}
      <Flex
        align="center"
        justify="center"
        position="relative"
        h="auto"
        w={["90%", "70%"]}
      >
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
        <Flex
          align="center"
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
              />
            )
          )}
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default Section1;
