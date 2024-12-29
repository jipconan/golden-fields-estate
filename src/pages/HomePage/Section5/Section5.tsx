// Section3.tsx
import ContactSection from "../../../components/Contact/ContactSection";
import { CustomFlex } from "../../../components/Shared";

const Section5: React.FC = () => (
  <CustomFlex direction="column" w="80%" minH={["100%", "sm", "md", "lg"]}>
    <ContactSection />
  </CustomFlex>
);

export default Section5;
