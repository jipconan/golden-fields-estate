import LocationSection from "../../../components/Location/LocationSection";
import { CustomFlex } from "../../../components/Shared";

const Section3: React.FC = () => (
  <CustomFlex
    direction="column"
    h={["100%", "100vh"]}
    minH={["2240px", "1000px"]}
    py={["20%", 0]}
  >
    <LocationSection />
  </CustomFlex>
);

export default Section3;
