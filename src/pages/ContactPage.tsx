import { CustomFlex } from "../components/Shared";
import ContactSection from "../components/Contact/ContactSection";

// Contact Page component
const ContactPage: React.FC = () => {
  return (
    <CustomFlex direction="column" w="80%" mx="auto">
      {/* Contact Section Component */}
      <CustomFlex minH={[null, "860px"]}>
        <ContactSection />
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactPage;
