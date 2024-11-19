import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  AGENTS_NAMES_SORT,
  AGENTS_EXPERIENCES,
  LANGUAGES,
} from "../../constants/menuBarConstants";
import { MenuBar } from "../Shared/MenuBar";

const AgentSearchBar: React.FC = () => {
  const [selectedName, setSelectedName] = useState("Name");
  const [selectedExperience, setSelectedExperience] = useState("Experience");
  const [selectedLanguages, setSelectedLanguages] = useState("Languages");

  const handleSelect = (index: number, value: string) => {
    if (index === 0) {
      setSelectedName(value);
    } else if (index === 1) {
      setSelectedExperience(value);
    } else if (index === 2) {
      setSelectedLanguages(value);
    }
  };

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      minH="200px"
    >
      <MenuBar
        categories={[AGENTS_NAMES_SORT, AGENTS_EXPERIENCES, LANGUAGES]}
        selections={[selectedName, selectedExperience, selectedLanguages]}
        onSelect={handleSelect}
      />
    </Flex>
  );
};

export { AgentSearchBar };
