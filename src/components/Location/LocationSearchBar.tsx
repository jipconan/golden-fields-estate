import React, { useState } from "react";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuButtonProps,
  Button,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { SectionData } from "../../types/appStructureTypes";
import {
  LOCATIONS,
  HOUSING_TYPES,
  PRICING,
} from "../../constants/locationConstants";
import { formatNumberWithCommas } from "../../utilties/formatter";

const LocationSearchBar: React.FC<SectionData> = () => {
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

  // CustomButton component for consistent text styling
  const CustomMenuButton: React.FC<MenuButtonProps> = (props) => (
    <MenuButton
      as={Button}
      w="200px"
      h="150px"
      fontSize={["md", "2xl"]}
      borderRadius="0"
      border="1px solid gray"
      whiteSpace="normal"
      textOverflow="clip"
      color="white"
      {...props}
    />
  );

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      minH="300px"
    >
      {[LOCATIONS, HOUSING_TYPES, PRICING].map((category, index) => (
        <Menu key={index}>
          <CustomMenuButton
            bgColor="#535353"
            _active={{ bgColor: "#535353" }}
            _hover={{ bgColor: "gray" }}
          >
            {index === 0
              ? selectedLocation
              : index === 1
              ? selectedHousingType
              : selectedPricing}
          </CustomMenuButton>

          <MenuList>
            {category.map((item, idx) => (
              <MenuItem
                key={idx}
                onClick={() => handleSelect(index, item.toString())}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}
      <Menu>
        <CustomMenuButton
          bgColor="teal.500"
          _active={{ bgColor: "teal.500" }}
          _hover={{ bgColor: "teal.400" }}
        >
          <IoSearch size="1.5em" style={{ margin: "auto" }} />
        </CustomMenuButton>
      </Menu>
    </Flex>
  );
};

export { LocationSearchBar };
