// HomePage.tsx
import * as Section from "./index";
import { CustomFlex } from "../../components/Shared";
import Section6 from "./Section6/Section6";

const HomePage: React.FC = () => {
  const sections = Object.values(Section);

  return (
    <CustomFlex direction="column">
      {sections.map((SectionComponent, index) => (
        <CustomFlex key={index} direction="column" mb={[32, 12, 12, 24]}>
          <SectionComponent />
        </CustomFlex>
      ))}

      <Section6 />
    </CustomFlex>
  );
};

export default HomePage;
