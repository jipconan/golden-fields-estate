// Section3.tsx
import { Flex } from "@chakra-ui/react";
import ContactSection from "../../../components/Contact/ContactSection";

const Section5: React.FC = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    w="80%"
    h={["100%", "100%"]}
    minH={[null, "1200px"]}
    py={["20%", 0]}
  >
    <ContactSection />
  </Flex>
);

export default Section5;
