import { Flex, Heading, Text, HeadingProps, Image } from "@chakra-ui/react";
import { ClickableIconProps } from "../../types/generalTypes";
import { Section2Data } from "../../data/HomePageData";
import { LOCATION_IMAGE } from "../../constants/mediaConstants";
import { LocationSearchBar } from "./LocationSearchBar";

// CustomIcon component for consistent icon styling
const CustomImage: React.FC<ClickableIconProps> = ({
  src,
  alt,
  ...imageProps
}) => (
  <Image
    src={src}
    alt={alt}
    objectFit="cover"
    w="100%"
    h="100%"
    {...imageProps}
  />
);

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading
    textAlign="start"
    fontWeight="700"
    color="black"
    fontSize={["6xl", "6xl", "9xl"]}
    w="100%"
    h="100%"
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
    w={["200%", "200%"]}
    h="100%"
    fontSize={["lg", "2xl", "3xl"]}
    {...props}
  />
);

const LocationSection: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" w="80%" h="60%">
      {/* Section 2 - Location Subsection */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
      >
        {/* Location Subsection - Title and Text */}
        <Flex direction="row" gap={[2, 4]} w="100%" h="100%">
          <CustomHeader>{Section2Data.pageTitle2?.heading}</CustomHeader>
          <CustomText>{Section2Data.pageText2?.text}</CustomText>
        </Flex>
        <CustomImage src={LOCATION_IMAGE.image} />
        <LocationSearchBar />
      </Flex>
    </Flex>
  );
};

export default LocationSection;
