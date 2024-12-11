// Section3.tsx
import ContactSection from "../../../components/Contact/ContactSection";
import { CustomFlex } from "../../../components/Shared";

const Section5: React.FC = () => (
  <CustomFlex
    direction="column"
    w="80%"
    minH={[null, "1000px"]}
    py={["20%", 0]}
  >
    <ContactSection />
  </CustomFlex>
);

export default Section5;
