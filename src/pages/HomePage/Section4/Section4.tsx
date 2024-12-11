// Section2.tsx
import { Section4Data } from "../../../data/HomePageData";
import AgentCard from "../../../components/Agent/AgentCard";
import { agents } from "../../../data/AgentData";
import {
  CustomButton,
  CustomHeader,
  CustomText,
  CustomFlex,
} from "../../../components/Shared";

const Section4: React.FC = () => {
  return (
    <CustomFlex direction="column" minH={[null, "1200px"]} py={["20%", 0]}>
      <CustomFlex direction={["column", "row"]} w="80%" gap={4} my={[24, null]}>
        {/* Section 4 - Title Subsection */}
        <CustomFlex direction="column">
          <CustomHeader
            fontSize={["8xl", "7xl", "9xl"]}
            lineHeight={1}
            textAlign="start"
          >
            {Section4Data.pageTitle.heading}
          </CustomHeader>
          <CustomHeader fontSize={["8xl", "5xl", "7xl"]} textAlign="start">
            {Section4Data.pageText.text}
          </CustomHeader>
        </CustomFlex>

        {/* Section 4 - Description Subsection */}
        <CustomFlex direction="column" minH={[null, "400px"]}>
          <CustomHeader fontSize={["5xl", "3xl", "5xl"]}>
            {Section4Data.pageTitle2.heading}
          </CustomHeader>
          <CustomText fontSize={["5xl", "lg", "3xl"]}>
            {Section4Data.pageText2.text}
          </CustomText>
        </CustomFlex>
      </CustomFlex>

      {/* Section 4 - Agents Subsection */}
      <CustomFlex direction={["column", "row"]} w="80%" gap={[24, 4]}>
        {agents.slice(0, 4).map((agent, index) => (
          <AgentCard
            key={index}
            agent={agent}
            onContact={() => alert(`Contacting ${agent.name}`)}
          />
        ))}
      </CustomFlex>

      {/* View More Button */}
      <CustomButton
        onClick={() => (window.location.href = "/agents")}
        buttonName="View More"
        minW={["500px", "300px"]}
        minH={["100px", "50px"]}
        fontSize={["5xl", "lg"]}
      />
    </CustomFlex>
  );
};

export default Section4;
