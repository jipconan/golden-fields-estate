import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { AgentCardProps } from "../../types/generalTypes";

const AgentCard: React.FC<AgentCardProps> = ({ agent, onContact }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      h="100%"
    >
      <Image src={agent.image} alt={agent.name} width="100%" />
      <Box p="6" minH={[null, "250px"]} minW={[null, "350px"]}>
        <Heading as="h3" size="lg" mb="2">
          {agent.name}
        </Heading>
        <Text fontSize="lg" color="gray.500" mb="4">
          {agent.availability}
        </Text>
        <Text fontSize="xl" mb="4">
          {agent.description}
        </Text>
      </Box>
      <Button
        bgColor="lightgrey"
        _hover={{ bg: "grey" }}
        onClick={onContact}
        width="100%"
        minH="75px"
        fontSize="2xl"
        borderRadius={0}
      >
        Contact
      </Button>
    </Box>
  );
};

export default AgentCard;
