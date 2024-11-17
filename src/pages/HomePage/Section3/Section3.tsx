// Section3.tsx
import { Flex } from "@chakra-ui/react";
import LocationSection from "../../../components/Location/LocationSection";

const Section3: React.FC = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    w="100%"
    h={["100%", "100vh"]}
    minH={[null, "1200px"]}
    py={["20%", 0]}
  >
    <LocationSection />
  </Flex>
);

export default Section3;
