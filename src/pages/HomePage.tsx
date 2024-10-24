import { Flex, Heading, Image, HeadingProps, Box } from "@chakra-ui/react";
import { landingPageData } from "../data/HomePageData";
import { ClickableIconProps, ImageAsset } from "../types/generalTypes";

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading textAlign="start" color="white" {...props} />
);

// CustomIcon component for consistent icon styling
const CustomIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  heading,
  ...imageProps
}) => (
  <Flex direction="column" align="center" justify="center">
    <Image
      src={src}
      alt={alt}
      boxSize="85px"
      objectFit="cover"
      p={6}
      bg="iconGreen"
      {...imageProps}
    />
    <CustomHeader size="lg" fontWeight="300" mt={4} w="70%" textAlign="center">
      {heading}
    </CustomHeader>
  </Flex>
);

const HomePage: React.FC = () => {
  return (
    <Flex direction="column">
      {/* HomePage Section 1 */}
      <Flex direction="column">
        {/* Landing Page - Background Image */}
        <Box
          backgroundImage={landingPageData.pageImage.imageAsset?.image}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height="100vh"
        >
          <Flex
            direction="column"
            align="center"
            justify="space-between"
            height="100%"
            py="32"
          >
            {/* Landing Page - Title */}
            <CustomHeader
              fontSize="8xl"
              fontWeight="700"
              fontFamily="cormorantSc"
              textShadow="4px 4px 5px rgba(0, 0, 0, 0.35)"
              mb={8}
            >
              {landingPageData.pageTitle?.heading}
            </CustomHeader>

            <Flex align="center" justify="center" position="relative">
              {/* Landing Page - Icons selection - white line */}
              <Box
                position="absolute"
                h="2px"
                w="50vw"
                bg="white"
                top="25%"
                zIndex="0"
              />

              {/* Landing Page - Icons selection - row of icons */}
              <Flex wrap="wrap" justify="space-between" w="60vw" zIndex="1">
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
    </Flex>
  );
};

export default HomePage;
