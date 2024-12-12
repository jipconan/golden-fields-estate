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
    w={["100%", "200px"]}
    h={["150px", "150px"]}
    fontSize={["1.5em", "2xl"]}
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
                fontSize={["30px", "initial"]}
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
    </>
  );
};

export default MenuBar;
