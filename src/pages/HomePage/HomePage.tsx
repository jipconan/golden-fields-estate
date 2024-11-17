// HomePage.tsx
import { Flex, FlexProps } from "@chakra-ui/react";
import * as Section from "./index";
import Section6 from "./Section6/Section6";

// CustomFlex component for consistent section styling
const CustomFlex: React.FC<FlexProps> = (props) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    w="100%"
    h="100%"
    minW={["850px", "20vw"]}
    minH={[null, "600px"]}
    border="1px solid black"
    {...props}
  />
);

const HomePage: React.FC = () => {
  const sections = Object.values(Section);

  return (
    <Flex direction="column" w="auto" h="auto">
      {sections.map((SectionComponent, index) => (
        <CustomFlex key={index}>
          <SectionComponent />
        </CustomFlex>
      ))}
      <Section6 />
    </Flex>
  );
};

export default HomePage;
