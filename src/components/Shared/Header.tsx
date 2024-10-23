import {
  Flex,
  Link,
  LinkProps,
  Text,
  TextProps,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { headerData } from "../../data/AppStructureData";
import { HeaderData } from "../../types/AppStructureTypes";

// CustomText component for consistent text styling across the footer
const CustomText: React.FC<TextProps> = (props) => (
  <Text
    fontSize="2xl"
    fontWeight="300"
    textAlign="start"
    color="black"
    {...props}
  />
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

// Header component: responsible for rendering the entire header
const Header: React.FC<HeaderData> = () => {
  return (
    <Flex
      as="header"
      direction={{ base: "column", md: "row" }}
      px={{ base: 4, md: 16, lg: 24 }}
      py={14}
      justify="space-between"
    >
      <Link href="/">
        <Image
          src="/assets/Logo.svg"
          alt="Company Logo"
          boxSize="150px"
          objectFit="cover"
        />
      </Link>

      {headerData.links && (
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          wrap="wrap"
          bg="white"
          w="30vw"
        >
          {/* Map through the links in headerData and render them */}
          {headerData.links.map((link, index) => (
            <CustomLinks
              key={index}
              href={link.url}
              aria-label={`Visit ${link.name} link`}
            >
              {link.name}
            </CustomLinks>
          ))}
        </Flex>
      )}

      <CustomText visibility="hidden">.</CustomText>
    </Flex>
  );
};

export default Header;
