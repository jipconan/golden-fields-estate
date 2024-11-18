// HomePage.tsx
import { Flex, FlexProps } from "@chakra-ui/react";
import FeatureProperties from "../components/Property/FeatureProperties";
import ViewMoreButton from "../components/Shared/ViewMore";

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

const PropertiesPage: React.FC = () => {
  return (
    <Flex direction="column" w="80%" h="100%" mx="auto" my={8}>
      <CustomFlex>
        <FeatureProperties />
        <ViewMoreButton />
      </CustomFlex>
    </Flex>
  );
};

export default PropertiesPage;
