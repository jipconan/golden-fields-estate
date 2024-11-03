// HomePage.tsx
import { Flex, FlexProps } from "@chakra-ui/react";
import * as Section from "./index";

// CustomFlex component for consistent section styling
const CustomFlex: React.FC<FlexProps> = (props) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    minH="800px"
    minW="1200px"
    h={["2200px", "100vh"]}
    w="auto"
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
    </Flex>
  );
};

export default HomePage;
