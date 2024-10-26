// Section1.tsx
import { Flex, Heading, Text, HeadingProps } from "@chakra-ui/react";
import { Section2Data } from "../../../data/HomePageData";

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

const Section3: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" my={8}>
      {/* Section 2 - Location Subsection */}
      <Flex direction="column" align="center" w={["80vw", "75vw", "75vw"]}>
        {/* Location Subsection - Title and Text */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          gap={[2, 4, 6]}
          w="100%"
        >
          <CustomHeader>{Section2Data.pageTitle2?.heading}</CustomHeader>
          <CustomText w="200vw" fontSize={["xs", "sm", "md", "3xl"]}>
            {Section2Data.pageText2?.text}
          </CustomText>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section3;
