// Section2.tsx
import { Flex, Image } from "@chakra-ui/react";
import { ClickableIconProps, ImageAsset } from "../../../types/generalTypes";
import { Section2Data } from "../../../data/HomePageData";
import FeatureProperties from "../../../components/Property/FeatureProperties";

// CustomIcon component for consistent icon styling
const CustomImage: React.FC<ClickableIconProps> = ({
  src,
  alt,
  ...imageProps
}) => (
  <Image
    src={src}
    alt={alt}
    boxSize={["150px", "18vw"]}
    objectFit="cover"
    {...imageProps}
  />
);

const Section2: React.FC = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    w="100%"
    h={["100%", "100vh"]}
    minH={[null, "1200px"]}
    py={["20%", 0]}
  >
    {/* Section 2 - Feature Properties Subsection */}
    <FeatureProperties />

    {/* Section 2 - Grid Images Subsection */}
    <Flex direction="column" align="center" justify="center" w="100%" h="100%">
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        w={["85%", "80%"]}
        h="100%"
      >
        {Section2Data.pageGridImages.imageAssets?.map(
          (icon: ImageAsset, index: number) => (
            <CustomImage key={index} src={icon.image} alt={icon.alt} />
          )
        )}
      </Flex>
    </Flex>
  </Flex>
);

export default Section2;
