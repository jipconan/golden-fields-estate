import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuButtonProps,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

interface MenuBarProps {
  categories: (string | number)[][];

  selections: string[];
  onSelect: (index: number, value: string) => void;
}

// CustomButton component for consistent styling
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

const MenuBar: React.FC<MenuBarProps> = ({
  categories,
  selections,
  onSelect,
}) => {
  return (
    <>
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
                onClick={() => onSelect(index, item.toString())}
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
    </>
  );
};

export { MenuBar };
