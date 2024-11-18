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
    w="auto"
    h="auto"
  >
    <Image
      objectFit={["cover", "contain"]}
      align="start"
      justify="start"
      w={["auto", "180px"]}
      h={["60px", "auto"]}
      my={[8, 0]}
      {...imageProps}
    />
  </Link>
);

// CustomLinks component for consistent link styling across the header
const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link
    fontSize={["4xl", "2xl"]}
    fontWeight="300"
    textAlign={["start", "center"]}
    w="auto"
    h="auto"
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
      direction={["column", "row"]}
      justify="space-between"
      align={["start", "center"]}
      gap={[8, 0]}
      w="auto"
      h="auto"
      minH={[null, "10vh"]}
      p={[12, 8]}
      boxShadow="lg"
    >
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Links */}
      {headerData.headerLinks && (
        <Flex
          direction={["column", "row"]}
          justify="space-between"
          bg="white"
          w={["auto", "40vw"]}
          h="auto"
          minW={[null, "400px"]}
          gap={[8, 0]}
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
        visibility={[null, "hidden"]}
        display={["none", "block"]}
        pointerEvents="none"
      />
    </Flex>
  );
};

export default Header;
