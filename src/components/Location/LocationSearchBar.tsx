import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  LOCATIONS,
  HOUSING_TYPES,
  PRICING,
} from "../../constants/menuBarConstants";
import { formatNumberWithCommas } from "../../utilties/formatter";
import { MenuBar } from "../Shared/MenuBar";

const LocationSearchBar: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedHousingType, setSelectedHousingType] =
    useState("Housing Type");
  const [selectedPricing, setSelectedPricing] = useState("Pricing");

  const handleSelect = (index: number, value: string) => {
    if (index === 0) {
      setSelectedLocation(value);
    } else if (index === 1) {
      setSelectedHousingType(value);
    } else if (index === 2) {
      setSelectedPricing(`More than ${formatNumberWithCommas(Number(value))}`);
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
        categories={[LOCATIONS, HOUSING_TYPES, PRICING]}
        selections={[selectedLocation, selectedHousingType, selectedPricing]}
        onSelect={handleSelect}
      />
    </Flex>
  );
};

export { LocationSearchBar };
