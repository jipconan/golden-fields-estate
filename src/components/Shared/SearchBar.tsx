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
    h={["70px", "6em", "6em", "6em"]}
    fontSize={["10px", "xs", "xs", "2xl"]}
    borderRadius="0"
    border="1px solid gray"
    whiteSpace="normal"
    textOverflow="clip"
    color="white"
    paddingStart={0}
    paddingEnd={0}
    {...props}
  />
);

interface SearchBarProps {
  type: "agents" | "properties"; // Type parameter to decide which constants to use
}

const SearchBar: React.FC<SearchBarProps> = ({ type }) => {
  // Initial parameter labels based on the type
  const initialParam0 = type === "agents" ? "Names" : "Location";
  const initialParam1 = type === "agents" ? "Experience" : "Housing Type";
  const initialParam2 = type === "agents" ? "Languages" : "Pricing";

  // States for selected parameters
  const [selectedParam0, setSelectedParam0] = useState<string>(initialParam0);
  const [selectedParam1, setSelectedParam1] = useState<string>(initialParam1);
  const [selectedParam2, setSelectedParam2] = useState<string>(initialParam2);

  const handleSelect = (index: number, value: string) => {
    // Remove "More than" from selected value if present
    const sanitizedValue = value.replace(/^> /, "").replace(/,/g, "");

    // Update the corresponding parameter based on the index
    if (index === 0) setSelectedParam0(sanitizedValue);
    if (index === 1) setSelectedParam1(sanitizedValue);
    if (index === 2) setSelectedParam2(sanitizedValue);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedParam0 && selectedParam0 !== initialParam0)
      params.set(initialParam0, selectedParam0);
    if (selectedParam1 && selectedParam1 !== initialParam1)
      params.set(initialParam1, selectedParam1);
    if (selectedParam2 && selectedParam2 !== initialParam2)
      params.set(initialParam2, selectedParam2);

    window.location.assign(`/${type}?${params.toString()}`);
  };

  // Dynamic categories with "Default" prepended
  const categories =
    type === "agents"
      ? [
          [initialParam0, ...AGENTS_NAMES_SORT],
          [
            initialParam1,
            ...AGENTS_EXPERIENCES.map((experience) => `> ${experience}`),
          ],
          [initialParam2, ...LANGUAGES],
        ]
      : [
          [initialParam0, ...LOCATIONS],
          [initialParam1, ...HOUSING_TYPES],
          [
            initialParam2,
            ...PRICING.map((price) => `> ${formatNumberWithCommas(price)}`),
          ],
        ];

  const selections = [
    selectedParam0 || initialParam0,
    selectedParam1 || initialParam1,
    selectedParam2 || initialParam2,
  ];

  return (
    <CustomFlex direction="row" minH={["100%", "100px"]}>
      {categories.map((category, index) => (
        <Menu key={index}>
          {/* Custom button for each category */}
          <CustomMenuButton
            bgColor="#535353"
            _active={{ bgColor: "#535353" }}
            _hover={{ bgColor: "gray" }}
          >
            {selections[index]}
          </CustomMenuButton>

          {/* Dynamic menu list based on the category */}
          <MenuList>
            {category.map((item, idx) => (
              <MenuItem
                key={idx}
                onClick={() => handleSelect(index, item.toString())}
                fontSize={["20px", "xs", "sm", "3xl"]}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}
      <Menu>
        {/* Custom button for search */}
        <CustomMenuButton
          bgColor="teal.500"
          _active={{ bgColor: "teal.500" }}
          _hover={{ bgColor: "teal.400" }}
          onClick={handleSearch}
        >
          <IoSearch size="30px" style={{ margin: "auto" }} />
        </CustomMenuButton>
      </Menu>
    </CustomFlex>
  );
};

export default SearchBar;
