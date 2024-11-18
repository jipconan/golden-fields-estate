// HomePage.tsx
import { Flex, FlexProps } from "@chakra-ui/react";
import ContactSection from "../components/Contact/ContactSection";

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
    {...props}
  />
);

const ContactPage: React.FC = () => {
  return (
    <Flex direction="column" w="80%" h="100%" mx="auto">
      <CustomFlex>
        <ContactSection />
      </CustomFlex>
    </Flex>
  );
};

export default ContactPage;
