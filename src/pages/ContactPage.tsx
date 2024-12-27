import { CustomFlex } from "../components/Shared";
import ContactSection from "../components/Contact/ContactSection";
import useScrollbarWidth from "../utilties/scrollbarWidth";

// Contact Page component
const ContactPage: React.FC = () => {
  const scrollbarWidth = useScrollbarWidth();
  return (
    <CustomFlex
      direction="column"
      w={["100%", `calc(100vw - ${scrollbarWidth}px)`]}
    >
      {/* Contact Section Component */}
      <CustomFlex minH={[null, "860px"]} w="80%">
        <ContactSection />
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactPage;
