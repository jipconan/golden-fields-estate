// Section2.tsx
import {
  Flex,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Button,
} from "@chakra-ui/react";
import { Section4Data } from "../../../data/HomePageData";
import AgentCard from "../../../components/Agent/AgentCard";
import { agents } from "../../../data/AgentData"; // Adjust the path as necessary

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

const Section4: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h={["100%", "100%"]}
      minH={[null, "1200px"]}
      py={["20%", 0]}
    >
      <Flex
        direction="row"
        align="center"
        justify="center"
        w="80%"
        h="100%"
        gap={4}
      >
        {/* Section 4 - Title Subsection */}
        <Flex direction="column" w="100%" h="100%">
          <CustomHeader fontSize={["lg", "7xl", "9xl"]} lineHeight={1}>
            {Section4Data.pageTitle.heading}
          </CustomHeader>
          <CustomHeader fontSize={["md", "5xl", "7xl"]}>
            {Section4Data.pageText.text}
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
            {Section4Data.pageTitle2.heading}
          </CustomHeader>
          <CustomText fontSize={["sm", "lg", "3xl"]}>
            {Section4Data.pageText2.text}
          </CustomText>
        </Flex>
      </Flex>

      {/* Section 4 - Agents Subsection */}
      <Flex
        direction="row"
        align="center"
        justify="center"
        w="80%"
        h="100%"
        gap={4}
      >
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            agent={agent}
            onContact={() => alert(`Contacting ${agent.name}`)}
          />
        ))}
      </Flex>
      <Button
        bgColor="teal.500"
        _hover={{ bg: "teal.700" }}
        color="white"
        minW="300px"
        minH="50px"
        fontSize="lg"
        my={8}
      >
        View More
      </Button>
    </Flex>
  );
};

export default Section4;
