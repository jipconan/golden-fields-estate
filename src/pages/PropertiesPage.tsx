import { CustomFlex, CustomButton } from "../components/Shared";
import FeatureProperties from "../components/Property/FeatureProperties";

// PropertiesPage Component
const PropertiesPage: React.FC = () => {
  return (
    <CustomFlex direction="column" mx="auto" my={8}>
      <CustomFlex
        direction="column"
        minW={["850px", "20vw"]}
        minH={[null, "600px"]}
      >
        {/* Feature Properties Component */}
        <FeatureProperties />

        {/* View More Button */}
        <CustomButton
          onClick={() => (window.location.href = "/properties/gallery")}
          buttonName="View More"
        />
      </CustomFlex>
    </CustomFlex>
  );
};

export default PropertiesPage;
