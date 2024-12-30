import { CustomFlex, CustomButton } from "../components/Shared";
import FeatureProperties from "../components/Property/FeatureProperties";
import useScrollbarWidth from "../utilties/scrollbarWidth";

// PropertiesPage Component
const PropertiesPage: React.FC = () => {
  const scrollbarWidth = useScrollbarWidth();
  return (
    <CustomFlex
      direction="column"
      w={["100%", `calc(100vw - ${scrollbarWidth}px)`]}
    >
      <CustomFlex
        direction="column"
        minW={["100%", "20vw"]}
        minH={["100%", "100vh"]}
      >
        {/* Feature Properties Component */}
        <FeatureProperties />

        {/* View More Button */}
        <CustomButton
          onClick={() => (window.location.href = "/propertiesgallery")}
          buttonName="View More"
        />
      </CustomFlex>
    </CustomFlex>
  );
};

export default PropertiesPage;
