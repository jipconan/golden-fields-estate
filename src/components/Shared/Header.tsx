import { Flex, Link, LinkProps, Image, ImageProps } from "@chakra-ui/react";
import React from "react";
import { headerData } from "../../data/AppStructureData";
import type { TextLink, ClickableImageProps } from "../../types/generalTypes";
import type { SectionData } from "../../types/appStructureTypes";

// CustomImage component for the header logo
const CustomImage: React.FC<ClickableImageProps> = ({
  href,
  pointerEvents,
  ...imageProps
}) => (
  <Link
    href={href}
    pointerEvents={pointerEvents}
    alignContent="center"
    justifyContent="center"
  >
    <Image
      maxBlockSize="25px"
      objectFit="cover"
      h="100px"
      my={[2, 0, null]}
      {...imageProps}
    />
  </Link>
);

// CustomLinks component for consistent link styling across the header
const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link
    fontSize={["lg", "lg", "2xl"]}
    fontWeight="300"
    textAlign="start"
    w={["80px", "100px"]}
    color="black"
    aria-label={`Visit ${props["aria-label"]} link`}
    {...props}
  />
);

// HeaderLogo component
const HeaderLogo: React.FC<ImageProps> = (props) => (
  <CustomImage
    href={headerData.headerLogo.imageLink?.url}
    src={headerData.headerLogo.imageLink?.image}
    alt={headerData.headerLogo.imageLink?.url}
    {...props}
  />
);

// Header component: responsible for rendering the entire header
const Header: React.FC<SectionData> = () => {
  return (
    <Flex
      as="header"
      direction={["column", "row", null]}
      p={4}
      justify="space-between"
    >
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Links */}
      {headerData.headerLinks && (
        <Flex
          direction={["column", "row", null]}
          justify="space-between"
          wrap="wrap"
          bg="white"
          w="40vw"
          my={[2, 0, null]}
        >
          {/* Map through the links in headerData.headerLinks and render them */}
          {headerData.headerLinks?.textLinks &&
            headerData.headerLinks?.textLinks.map(
              (link: TextLink, index: number) => (
                <CustomLinks key={index} href={link.url} aria-label={link.name}>
                  {link.name}
                </CustomLinks>
              )
            )}
        </Flex>
      )}

      {/* Same Header Logo but Invisible & Unclickable set as the last element in the header */}
      {/* This allows to offset an empty column on the right side of the header with the same size */}
      <HeaderLogo
        visibility={[null, "hidden", null]}
        display={["none", "block", null]}
        pointerEvents="none"
      />
    </Flex>
  );
};

export default Header;
