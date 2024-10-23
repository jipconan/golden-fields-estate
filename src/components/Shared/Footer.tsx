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
import type { FooterSection } from "../../types/AppStructureTypes";

// CustomText component for consistent text styling across the footer
const CustomHeading: React.FC<HeadingProps> = (props) => (
  <Heading size="lg" mb={8} textAlign="start" {...props} />
);

// CustomText component for consistent text styling across the footer
const CustomText: React.FC<TextProps> = (props) => (
  <Text fontSize="2xl" fontWeight="300" textAlign="start" {...props} />
);

// CustomLinks component for consistent link styling across the footer
const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link fontSize="2xl" fontWeight="300" textAlign="start" {...props} />
);

// FooterSection component: responsible for rendering each section of the footer dynamically
const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => (
  <Flex direction="column" align="flex-start" mb={{ base: 8, md: 0 }}>
    {section.heading ? (
      // Render the heading if it exists
      <CustomHeading>{section.heading}</CustomHeading>
    ) : (
      // If heading is empty, render a hidden placeholder
      <CustomHeading visibility="hidden">.</CustomHeading>
    )}

    {/* Render links if the section contains any */}
    {section.links && (
      <Flex direction="column" align="flex-start" gap={2} mb={2}>
        {section.links.map((link, index) => (
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

    {/* Render text if the section contains any */}
    {section.text && (
      <CustomText>
        {section.text.map((line, index) => (
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
      direction={{ base: "column", md: "row" }}
      px={{ base: 4, md: 16, lg: 24 }}
      py={14}
      color="white"
      justify="space-between"
      wrap="wrap"
      bg="customGray"
    >
      {/* Dynamically render each section in the footer by mapping through the footerData */}
      {Object.values(footerData).map((section, index) => (
        <FooterSection key={index} section={section} />
      ))}
    </Flex>
  );
};

export default Footer;
