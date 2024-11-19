import {
  Flex,
  Heading,
  Text,
  Link,
  TextProps,
  LinkProps,
  HeadingProps,
} from "@chakra-ui/react";
import React from "react";
import { footerData } from "../../data/AppStructureData";
import type { Section } from "../../types/AppStructureTypes";

// CustomText component for consistent text styling across the footer
const CustomHeading: React.FC<HeadingProps> = (props) => (
  <Heading size={["4xl", "2xl"]} mb={8} textAlign="start" {...props} />
);

// CustomText component for consistent text styling across the footer
const CustomText: React.FC<TextProps> = (props) => (
  <Text
    fontSize={["5xl", "2xl"]}
    fontWeight="300"
    textAlign="start"
    w="auto"
    h="auto"
    {...props}
  />
);

// CustomLinks component for consistent link styling across the footer
const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link
    fontSize={["5xl", "2xl"]}
    fontWeight="300"
    textAlign="start"
    aria-label={`Visit ${props["aria-label"]} link`}
    w="auto"
    h="auto"
    {...props}
  />
);

// FooterSection component: responsible for rendering each section of the footer dynamically
const FooterSection: React.FC<{ section: Section }> = ({ section }) => (
  <Flex
    direction="column"
    align="flex-start"
    m={[8, 0]}
    px={[12, 0]}
    w={["auto", "40vw"]}
    h="auto"
  >
    {section.heading ? (
      // Render the heading if it exists
      <CustomHeading>{section.heading}</CustomHeading>
    ) : (
      // If heading is empty, render a hidden placeholder
      <CustomHeading visibility="hidden">.</CustomHeading>
    )}

    {/* Render links if the section contains any */}
    {section.textLinks && (
      <Flex
        direction="column"
        align="flex-start"
        gap={[12, 2]}
        mb={2}
        w="auto"
        h="auto"
      >
        {section.textLinks.map((link, index) => (
          <CustomLinks key={index} href={link.url} aria-label={link.name}>
            {link.name}
          </CustomLinks>
        ))}
      </Flex>
    )}

    {/* Render text if the section contains any */}
    {section.texts && (
      <CustomText>
        {section.texts?.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </CustomText>
    )}
  </Flex>
);

// Footer component: responsible for rendering the entire footer
// It dynamically maps through the sections in footerData and renders each section using the FooterSection component
const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      direction={["column", "row"]}
      px={[8, 32]}
      py={[36, 14]}
      color="white"
      justify="space-between"
      bg="customGray"
      w="auto"
      h="auto"
      gap={[24, 4]}
    >
      {/* Dynamically render each section in the footer by mapping through the footerData */}
      {Object.values(footerData).map((section, index) => (
        <FooterSection key={index} section={section} />
      ))}
    </Flex>
  );
};

export default Footer;
