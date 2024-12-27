import { ImageProps } from "@chakra-ui/react";
import React from "react";
import { headerData } from "../../data/AppStructureData";
import type { TextLink } from "../../types/generalTypes";
import type { SectionData } from "../../types/AppStructureTypes";
import { CustomFlex, CustomLink, CustomImageLink } from "../Shared";

// HeaderLogo component
const HeaderLogo: React.FC<ImageProps> = (props) => (
  <CustomImageLink
    href={headerData.headerLogo.imageLink?.url}
    src={headerData.headerLogo.imageLink?.image}
    alt={headerData.headerLogo.imageLink?.url}
    objectFit={["cover", "contain"]}
    align="start"
    justifyContent="start"
    w={["auto", "180px"]}
    h={["60px", "auto"]}
    my={[8, 0]}
    {...props}
  />
);

// Header component: responsible for rendering the entire header
const Header: React.FC<SectionData> = () => {
  return (
    <CustomFlex
      as="header"
      direction={["column", "row"]}
      justify="space-between"
      align={["start", "center"]}
      minH={[null, "10vh"]}
      p={[12, 8]}
      boxShadow="lg"
      minW={["850px", "100%"]}
    >
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Links */}
      {headerData.headerLinks && (
        <CustomFlex
          direction={["column", "row"]}
          justify={["start", "space-between"]}
          align="start"
          bg="white"
          w={["100%", "50%"]}
          gap={[8, 0]}
          my={[8, 0]}
        >
          {/* Map through the links in headerData.headerLinks and render them */}
          {headerData.headerLinks?.textLinks &&
            headerData.headerLinks?.textLinks.map(
              (link: TextLink, index: number) => (
                <CustomLink
                  key={index}
                  href={link.url}
                  aria-label={link.name}
                  alignContent="start"
                  justifyContent="start"
                >
                  {link.name}
                </CustomLink>
              )
            )}
        </CustomFlex>
      )}

      {/* Same Header Logo but Invisible & Unclickable set as the last element in the header */}
      {/* This allows to offset an empty column on the right side of the header with the same size */}
      <HeaderLogo
        visibility={[null, "hidden"]}
        display={["none", "block"]}
        pointerEvents="none"
      />
    </CustomFlex>
  );
};

export default Header;
