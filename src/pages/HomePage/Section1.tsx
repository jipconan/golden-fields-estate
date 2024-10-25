// Section1.tsx
import { Flex, Heading, Image, HeadingProps, Box } from "@chakra-ui/react";
import { landingPageData } from "../../data/HomePageData";
import { ClickableIconProps, ImageAsset } from "../../types/generalTypes";

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading textAlign="center" color="white" {...props} />
);

// CustomIcon component for consistent icon styling
const CustomIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  heading,
  ...imageProps
}) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    minW={["80px", "120px", "140px"]}
  >
    <Image
      src={src}
      alt={alt}
      boxSize={["40px", "70px", "95px"]}
      objectFit="cover"
      p={[2, 4, 6]}
      bg="iconGreen"
      {...imageProps}
    />
    <CustomHeader
      size={["xs", "lg", "lg"]}
      h={["40px", "65px", null]}
      w={["80px", "140px", "140px"]}
      fontWeight="300"
      mt={4}
    >
      {heading}
    </CustomHeader>
  </Flex>
);

const Section1: React.FC = () => (
  <Flex direction="column">
    <Box
      backgroundImage={landingPageData.pageImage.imageAsset?.image}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        minH={["40vh", "50vh", "100vh"]}
        py={["8%", "10%", "10%"]}
      >
        {/* Landing Page - Title */}
        <CustomHeader
          fontSize={["3xl", "6xl", "9xl"]}
          fontWeight="700"
          fontFamily="cormorantSc"
          textShadow="4px 4px 5px rgba(0, 0, 0, 0.35)"
          textAlign="center"
          w="90vw"
        >
          {landingPageData.pageTitle?.heading}
        </CustomHeader>

        {/* Icon Section */}
        <Flex align="center" justify="center" position="relative">
          {/* Icon Section - white line */}
          <Box
            position="absolute"
            h={["1px", "1px", "2px"]}
            w={["60vw", "64vw", "62vw"]}
            bg="white"
            top="25%"
            zIndex="0"
          />

          {/* Icon Section - row of icons */}
          <Flex
            align="center"
            position="relative"
            justify="space-between"
            w={["100%", "100%", "70vw"]}
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
  </Flex>
);

export default Section1;
