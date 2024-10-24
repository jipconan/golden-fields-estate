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
  <Link href={href} pointerEvents={pointerEvents}>
    <Image {...imageProps} />
  </Link>
);

// CustomLinks component for consistent link styling across the header
const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link
    fontSize="2xl"
    fontWeight="300"
    textAlign="start"
    color="black"
    {...props}
  />
);

// HeaderLogo component
const HeaderLogo: React.FC<ImageProps> = (props) => (
  <CustomImage
    href={headerData.headerLogo.imageLink?.url}
    src={headerData.headerLogo.imageLink?.image}
    alt="Company Logo"
    maxBlockSize="30px"
    objectFit="cover"
    my={{ sm: 2, md: 0 }}
    {...props}
  />
);

// Header component: responsible for rendering the entire header
const Header: React.FC<SectionData> = () => {
  return (
    <Flex
      as="header"
      direction={{ base: "column", md: "row" }}
      p={4}
      justify="space-between"
    >
      {/* Header Logo */}
      <HeaderLogo />

      {/* Header Links */}
      {headerData.headerLinks && (
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          wrap="wrap"
          bg="white"
          w="30vw"
          my={{ sm: 2, md: 0 }}
        >
          {/* Map through the links in headerData.headerLinks and render them */}
          {headerData.headerLinks?.textLinks &&
            headerData.headerLinks?.textLinks.map(
              (link: TextLink, index: number) => (
                <CustomLinks
                  key={index}
                  href={link.url}
                  aria-label={`Visit ${link.name} link`}
                >
                  {link.name}
                </CustomLinks>
              )
            )}
        </Flex>
      )}

      {/* Same Header Logo but Invisible & Unclickable set as the last element in the header */}
      {/* This allows to offset an empty column on the right side of the header with the same size */}
      <HeaderLogo
        visibility={{ md: "hidden" }}
        display={{ base: "none", md: "block" }}
        pointerEvents="none"
      />
    </Flex>
  );
};

export default Header;
