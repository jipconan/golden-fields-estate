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
    w={["100%", "4em", "6em", "8em"]}
    h={["30px", "auto"]}
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
      h={["300px", "10vh"]}
      p={[6, 8]}
      boxShadow="lg"
    >
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Links */}
      {headerData.headerLinks && (
        <CustomFlex
          direction={["column", "row"]}
          justify={["start", "space-between"]}
          align={["start", "center"]}
          bg="white"
          w={["100%", "50%"]}
          gap={[8, 0]}
          my={[4, 0]}
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
                  fontSize={["20px", "sm", "xl", "3xl"]}
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
