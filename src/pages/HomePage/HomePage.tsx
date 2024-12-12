// HomePage.tsx
import * as Section from "./index";
import Section6 from "./Section6/Section6";
import { CustomFlex } from "../../components/Shared";

const HomePage: React.FC = () => {
  const sections = Object.values(Section);

  return (
    <CustomFlex direction="column">
      {sections.map((SectionComponent, index) => (
        <CustomFlex key={index} direction="column">
          <SectionComponent />
        </CustomFlex>
      ))}
      <Section6 />
    </CustomFlex>
  );
};

export default HomePage;
