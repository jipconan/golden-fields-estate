// Section2.tsx
import {
  Flex,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Image,
} from "@chakra-ui/react";
import { AboutPageData } from "../data/AboutPageData";
import { ClickableImageProps } from "../types/generalTypes";
import { AboutPageImage } from "../constants/mediaConstants";
import ContactSection from "../components/Contact/ContactSection";

// CustomImage component for consistent heading styling
const CustomImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  ...imageProps
}) => <Image src={src} alt={alt} objectFit="cover" {...imageProps} />;

// CustomHeading component for consistent heading styling
const CustomHeader: React.FC<HeadingProps> = (props) => (
  <Heading textAlign="start" color="black" w="100%" {...props} />
);

// CustomText component for consistent text styling
const CustomText: React.FC<TextProps> = (props) => (
  <Text
    textAlign="start"
    fontWeight="100"
    color="black"
    lineHeight="1.2"
    w="100%"
    h="100%"
    {...props}
  />
);

const AboutPage: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="80%"
      h={["100%", "100%"]}
      minH={[null, "1200px"]}
      py={["20%", 0]}
      mx="auto"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        gap={4}
        mt={12}
      >
        <CustomImage src={AboutPageImage.image} alt={AboutPageImage.alt} />
        <CustomText fontSize={["md", "2xl", "3xl"]}>
          {AboutPageData.pageText.text}
        </CustomText>
      </Flex>
      <Flex
        direction="row"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        gap={4}
      >
        {/* Section 4 - Title Subsection */}
        <Flex direction="column" w="100%" h="100%">
          <CustomHeader fontSize={["lg", "7xl", "9xl"]} w="50%" lineHeight={1}>
            {AboutPageData.pageTitle.heading}
          </CustomHeader>
        </Flex>

        {/* Section 4 - Description Subsection */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          minH={[null, "400px"]}
        >
          <CustomHeader fontSize={["sm", "3xl", "5xl"]}>
            {AboutPageData.pageTitle2.heading}
          </CustomHeader>
          <CustomText fontSize={["sm", "lg", "3xl"]}>
            {AboutPageData.pageText2.text}
          </CustomText>
        </Flex>
      </Flex>
      <ContactSection />
    </Flex>
  );
};

export default AboutPage;
