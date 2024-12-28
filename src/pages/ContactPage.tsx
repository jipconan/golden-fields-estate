import { CustomFlex } from "../components/Shared";
import ContactSection from "../components/Contact/ContactSection";

// Contact Page component
const ContactPage: React.FC = () => {
  return (
    <CustomFlex direction="column">
      {/* Contact Section Component */}
      <CustomFlex minH={["100%", "860px"]} w="80%">
        <ContactSection />
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactPage;
