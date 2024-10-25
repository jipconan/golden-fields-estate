// Section1.tsx
import { Flex, Heading, Text, Image, HeadingProps } from "@chakra-ui/react";
import { ClickableIconProps, ImageAsset } from "../../types/generalTypes";
import { Section2Data } from "../../data/HomePageData";

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
    fontSize={["xs", "sm", "md", "3xl"]}
    lineHeight="1.2"
    w="100%"
    p={[2, 4]}
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

const Section2: React.FC = () => (
  <Flex direction="column" align="center" justify="center" w="100%">
    {/* Section 2 - Feature Properties Subsection */}
    <Flex
      direction="column"
      align="center"
      justify="center"
      // minH={["60vh", "80vh", "100vh"]}
      py={[6, 8, 12]}
    >
      {/* Section 2 - Title */}
      <CustomHeader textAlign="center">
        {Section2Data.pageTitle?.heading}
      </CustomHeader>
    </Flex>

    {/* Section 2 - Location Subsection */}
    <Flex direction="column" align="center" w={["80vw", "75vw", "75vw"]} py={8}>
      {/* Section 2 - Grid Images Subsection */}
      <Flex direction="column" align="center" justify="center" w="100%" mt={8}>
        {/* Grid Images Subsection - row of grid images */}
        <Flex direction="row" align="center" justify="space-between" w="100%">
          {Section2Data.pageGridImages.imageAssets?.map(
            (icon: ImageAsset, index: number) => (
              <CustomImage key={index} src={icon.image} alt={icon.alt} />
            )
          )}
        </Flex>
      </Flex>

      {/* Location Subsection - Title and Text */}
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap={[2, 4, 6]}
        w="100%"
        mt={6}
      >
        <CustomHeader>{Section2Data.pageTitle2?.heading}</CustomHeader>
        <CustomText w="200vw">{Section2Data.pageText?.text}</CustomText>
      </Flex>
    </Flex>
  </Flex>
);

export default Section2;
