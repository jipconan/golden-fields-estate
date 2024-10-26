// Section1.tsx
import { Flex, Heading, Text, Image, HeadingProps } from "@chakra-ui/react";
import { ClickableIconProps, ImageAsset } from "../../../types/generalTypes";
import { Section2Data } from "../../../data/HomePageData";
import Section2ImageGallery from "./Section2ImageGallery";

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="start"
    fontWeight="700"
    color="black"
    fontSize={["2xl", "4xl", "6xl", "9xl"]}
    w="100%"
    {...props}
  />
);

// CustomText component for consistent text styling
const CustomText: React.FC<HeadingProps> = (props) => (
  <Text
    textAlign="start"
    fontWeight="100"
    color="black"
    lineHeight="1.2"
    w="100%"
    {...props}
  />
);

// CustomIcon component for consistent icon styling
const CustomImage: React.FC<ClickableIconProps> = ({
  src,
  alt,
  ...imageProps
}) => (
  <Image
    src={src}
    alt={alt}
    boxSize={["13vw", "15vw", "15vw", "15vw"]}
    objectFit="cover"
    {...imageProps}
  />
);

const Section2: React.FC = () => {
  return (
    // Section 2
    <Flex direction="column" align="center" justify="center" w="100%" my={8}>
      {/* Section 2 - Feature Properties Subsection */}
      <Flex direction="column" align="center" justify="center">
        {/* Section 2 - Feature Properties Subsection - Title & Text */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          mb={[4, 6, 20]}
        >
          <CustomHeader textAlign="center" lineHeight="1.2">
            {Section2Data.pageTitle?.heading}
          </CustomHeader>
          <CustomText fontSize={["7px", "xs", "md", "3xl"]} textAlign="center">
            {Section2Data.pageText?.text}
          </CustomText>
        </Flex>

        {/* Section 2 - Feature Properties Subsection - Image Gallery */}
        <Section2ImageGallery />
      </Flex>

      {/* Section 2 - Location Subsection */}
      <Flex direction="column" align="center" w={["80vw", "75vw", "75vw"]}>
        {/* Section 2 - Location Subsection- Grid Images */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          mb={4}
        >
          <Flex direction="row" align="center" justify="space-between" w="100%">
            {Section2Data.pageGridImages.imageAssets?.map(
              (icon: ImageAsset, index: number) => (
                <CustomImage key={index} src={icon.image} alt={icon.alt} />
              )
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section2;
