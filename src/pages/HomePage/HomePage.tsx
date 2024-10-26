// HomePage.tsx
import { Flex } from "@chakra-ui/react";
import * as Section from "./index";

const HomePage: React.FC = () => {
  return (
    <Flex direction="column" width="100%" height="100%">
      <Section.Section1 />
      <Section.Section2 />
      <Section.Section3 />
    </Flex>
  );
};

export default HomePage;
