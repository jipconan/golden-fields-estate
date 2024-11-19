import { Flex, Heading } from "@chakra-ui/react";
import { AgentSearchBar } from "../components/Agent/AgentSearchBar";
import AgentCard from "../components/Agent/AgentCard";
import { agents } from "../data/AgentData";
import { useState } from "react";
import ViewMoreButton from "../components/Shared/ViewMore";

const AgentGalleryPage: React.FC = () => {
  const [visibleAgents, setVisibleAgents] = useState(4);

  const handleViewMore = () => {
    setVisibleAgents((prevVisibleAgents) => prevVisibleAgents + 4);
  };

  const currentAgents = agents.slice(0, visibleAgents);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      py={["20%", 0]}
      mb={24}
    >
      <AgentSearchBar />
      <Flex w="80%" direction="column" align="center" justify="center" mt={8}>
        <Heading textAlign="start" alignSelf="flex-start">
          Our Agents
        </Heading>

        {/* Agent Cards Container */}
        <Flex
          wrap="wrap" // Enables wrapping to create new rows
          gap={4}
          w="100%"
          justify="center"
          mt={8}
        >
          {currentAgents.map((agent, index) => (
            <Flex
              key={index}
              basis="calc(25% - 1rem)" // Ensure 4 cards per row (adjust based on spacing)
              maxW="calc(25% - 1rem)"
            >
              <AgentCard
                agent={agent}
                onContact={() => alert(`Contacting ${agent.name}`)}
              />
            </Flex>
          ))}
        </Flex>
        {visibleAgents < agents.length && (
          <Flex mt={4} gap={4}>
            <ViewMoreButton onClick={handleViewMore} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default AgentGalleryPage;
