import React from "react";
import { footerData } from "../../data/AppStructureData";
import type { Section } from "../../types/AppStructureTypes";
import { CustomFlex, CustomHeader, CustomText, CustomLink } from "../Shared";

// FooterSection component: responsible for rendering each section of the footer dynamically
const FooterSection: React.FC<{ section: Section }> = ({ section }) => (
  <CustomFlex direction="column" align="flex-start" justify="flex-start">
    {section.heading ? (
      // Render the heading if it exists
      <CustomHeader
        fontSize={["20px", "md", "lg", "2xl"]}
        mb={2}
        textAlign="start"
        color="white"
      >
        {section.heading}
      </CustomHeader>
    ) : (
      // If heading is empty, render a hidden placeholder
      <CustomHeader
        fontSize={["20px", "md", "lg", "2xl"]}
        mb={2}
        textAlign="start"
        visibility="hidden"
      >
        .
      </CustomHeader>
    )}

    {/* Render links if the section contains any */}
    {section.textLinks && (
      <CustomFlex
        direction="column"
        align="flex-start"
        justify="flex-start"
        gap={[2, 2, 4, 8]}
        my={0}
      >
        {section.textLinks.map((link, index) => (
          <CustomLink
            key={index}
            href={link.url}
            aria-label={link.name}
            fontSize={["20px", "md", "lg", "2xl"]}
            fontWeight="300"
            textAlign="start"
            color="white"
            _hover={{
              textDecoration: "underline",
              color: "white",
            }}
          >
            {link.name}
          </CustomLink>
        ))}
      </CustomFlex>
    )}

    {/* Render text if the section contains any */}
    {section.texts && (
      <CustomText
        fontSize={["20px", "md", "lg", "2xl"]}
        fontWeight="300"
        textAlign="start"
        color="white"
      >
        {section.texts?.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </CustomText>
    )}
  </CustomFlex>
);

// Footer component: responsible for rendering the entire footer
// It dynamically maps through the sections in footerData and renders each section using the FooterSection component
const Footer: React.FC = () => {
  return (
    <CustomFlex
      as="footer"
      direction={["column", "row"]}
      py={[8, 8, 10, 32]}
      px={[8, 20, 20, 32]}
      align="flex-start"
      justify="space-between"
      bg="customGray"
      gap={[12, null]}
      h={["800px", "100%"]}
    >
      {/* Dynamically render each section in the footer by mapping through the footerData */}
      {Object.values(footerData).map((section, index) => (
        <FooterSection key={index} section={section} />
      ))}
    </CustomFlex>
  );
};

export default Footer;
