import React, { useState } from "react";
import { formatNumberWithCommas } from "../../utilties/formatter";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import {
  AGENTS_NAMES_SORT,
  AGENTS_EXPERIENCES,
  LANGUAGES,
  LOCATIONS,
  HOUSING_TYPES,
  PRICING,
} from "../../constants/menuBarConstants";
import { CustomFlex } from "../Shared";
import { MenuButtonProps } from "@chakra-ui/react";

// CustomButton component for consistent styling
const CustomMenuButton: React.FC<MenuButtonProps> = (props) => (
  <MenuButton
    as={Button}
    w={["100%", "8em", "8em", "8em"]}
    h={["70px", "6em", "6em", "8em"]}
    fontSize={["10px", "xs", "xs", "2xl"]}
    borderRadius="0"
    border="1px solid gray"
    whiteSpace="normal"
    textOverflow="clip"
    color="white"
    mt={8}
    {...props}
  />
);

interface SearchBarProps {
  type: "agents" | "properties"; // Type parameter to decide which constants to use
}

const SearchBar: React.FC<SearchBarProps> = ({ type }) => {
  // Set default label for each button based on the type
  const initialParam0 = type === "agents" ? "Agent Names" : "Location";
  const initialParam1 = type === "agents" ? "Experience" : "Housing Type";
  const initialParam2 = type === "agents" ? "Languages" : "Pricing";

  const [selectedParam0, setSelectedParam0] = useState<string>(initialParam0);
  const [selectedParam1, setSelectedParam1] = useState<string>(initialParam1);
  const [selectedParam2, setSelectedParam2] = useState<string>(initialParam2);

  const handleSelect = (index: number, value: string) => {
    if (index === 0) {
      setSelectedParam0(value);
    } else if (index === 1) {
      setSelectedParam1(value);
    } else if (index === 2) {
      setSelectedParam2(value);
    }
  };

  // Dynamic categories based on 'type'
  const categories =
    type === "agents"
      ? [AGENTS_NAMES_SORT, AGENTS_EXPERIENCES, LANGUAGES]
      : [
          LOCATIONS,
          HOUSING_TYPES,
          PRICING.map((price) => formatNumberWithCommas(price)),
        ];

  const selections =
    type === "agents"
      ? [selectedParam0, selectedParam1, selectedParam2]
      : [selectedParam0, selectedParam1, selectedParam2];

  return (
    <CustomFlex direction="row" minH={["100%", "100px"]}>
      {categories.map((category, index) => (
        <Menu key={index}>
          <CustomMenuButton
            bgColor="#535353"
            _active={{ bgColor: "#535353" }}
            _hover={{ bgColor: "gray" }}
          >
            {selections[index]}
          </CustomMenuButton>

          <MenuList>
            {category.map((item, idx) => (
              <MenuItem
                key={idx}
                onClick={() => handleSelect(index, item.toString())}
                fontSize={["20px", "1em", "initial"]}
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
          <IoSearch size="30px" style={{ margin: "auto" }} />
        </CustomMenuButton>
      </Menu>
    </CustomFlex>
  );
};

export default SearchBar;
