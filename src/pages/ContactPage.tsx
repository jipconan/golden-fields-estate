import { CustomFlex } from "../components/Shared";
import ContactSection from "../components/Contact/ContactSection";

// Contact Page component
const ContactPage: React.FC = () => {
  return (
    <CustomFlex direction="column" w="80%" mx="auto">
      {/* Contact Section Component */}
      <CustomFlex minW={["850px", "20vw"]} minH={[null, "800px"]}>
        <ContactSection />
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactPage;
