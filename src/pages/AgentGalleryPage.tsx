import { AgentSearchBar } from "../components/Agent/AgentSearchBar";
import AgentCard from "../components/Agent/AgentCard";
import { agents } from "../data/AgentData";
import { useState } from "react";
import { CustomButton, CustomFlex, CustomHeader } from "../components/Shared";

// Agent Gallery Page component
const AgentGalleryPage: React.FC = () => {
  const [visibleAgents, setVisibleAgents] = useState(4);

  const handleViewMore = () => {
    setVisibleAgents((prevVisibleAgents) => prevVisibleAgents + 4);
  };

  const currentAgents = agents.slice(0, visibleAgents);

  return (
    <CustomFlex direction="column" my={8} w="80%" mx="auto">
      {/* Agent Search Bar Component */}
      <AgentSearchBar />

      {/* Agent Gallery Page Content */}
      <CustomFlex direction="column">
        {/* Our Agents Title */}
        <CustomHeader
          textAlign="start"
          alignSelf="flex-start"
          size={["4xl", "3xl"]}
          my={8}
        >
          Our Agents
        </CustomHeader>

        {/* Agent Cards Container */}
        <CustomFlex wrap="wrap" gap={[24, 4]} direction={["column", "row"]}>
          {currentAgents.map((agent, index) => (
            <CustomFlex
              key={index}
              basis={[null, "calc(25% - 1rem)"]} // Ensure 4 cards per row (adjust based on spacing)
              maxW={[null, "calc(25% - 1rem)"]}
            >
              {/* Agent Card Component */}
              <AgentCard
                agent={agent}
                onContact={() => alert(`Contacting ${agent.name}`)}
              />
            </CustomFlex>
          ))}
        </CustomFlex>

        {/* View More button - Button disappear after all agents are listed */}
        {visibleAgents < agents.length && (
          <CustomFlex minH={[null, "0"]}>
            <CustomButton onClick={handleViewMore} buttonName="View More" />
          </CustomFlex>
        )}
      </CustomFlex>
    </CustomFlex>
  );
};

export default AgentGalleryPage;
