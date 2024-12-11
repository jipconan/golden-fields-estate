import React, { useState } from "react";
import {
  AGENTS_NAMES_SORT,
  AGENTS_EXPERIENCES,
  LANGUAGES,
} from "../../constants/menuBarConstants";
import { MenuBar, CustomFlex } from "../Shared";

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
    <CustomFlex direction="row" minH="200px">
      <MenuBar
        categories={[AGENTS_NAMES_SORT, AGENTS_EXPERIENCES, LANGUAGES]}
        selections={[selectedName, selectedExperience, selectedLanguages]}
        onSelect={handleSelect}
      />
    </CustomFlex>
  );
};

export { AgentSearchBar };
