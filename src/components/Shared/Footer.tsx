// Footer.tsx
import {
  Flex,
  Heading,
  Text,
  Link,
  TextProps,
  LinkProps,
} from "@chakra-ui/react";
import React from "react";
import { footerData } from "../../data/footerData";

// CustomText component for consistent text styling
const CustomText: React.FC<TextProps> = (props) => (
  <Text fontSize="2xl" fontWeight="300" textAlign="start" {...props} />
);

const CustomLinks: React.FC<LinkProps> = (props) => (
  <Link fontSize="2xl" fontWeight="300" textAlign="start" {...props} />
);

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
      {/* Visit Us Section */}
      <Flex
        direction="column"
        align="flex-start"
        mb={{ base: 8, md: 0 }}
        gap={4}
      >
        <Heading size="lg" mb={2}>
          {footerData.location.heading}
        </Heading>
        <CustomText>
          {footerData.location.text?.length
            ? footerData.location.text.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : "No address available."}
        </CustomText>
      </Flex>

      {/* Site Map Section */}
      <Flex
        direction="column"
        align="flex-start"
        mb={{ base: 8, md: 0 }}
        gap={4}
      >
        <Heading size="lg">{footerData.siteMap.heading}</Heading>
        <Flex direction="column" align="flex-start" gap={2}>
          {footerData.siteMap.links?.length ? (
            footerData.siteMap.links?.map((link) => (
              <CustomLinks
                key={link.name}
                href={link.url}
                aria-label={`Visit our ${link.name} page`}
              >
                {link.name}
              </CustomLinks>
            ))
          ) : (
            <CustomText>No links available.</CustomText>
          )}
        </Flex>
      </Flex>

      {/* Contact Section */}
      <Flex
        direction="column"
        align="flex-start"
        mb={{ base: 8, md: 0 }}
        gap={4}
      >
        <Heading size="lg">{footerData.contact.heading}</Heading>
        <Flex direction="column" align="flex-start" gap={2}>
          {footerData.contact.links?.length ? (
            footerData.contact.links?.map((link) => (
              <CustomLinks
                key={link.name}
                href={link.url}
                aria-label={`Contact us via ${link.name} link`}
              >
                {link.name}
              </CustomLinks>
            ))
          ) : (
            <CustomText>No contact links available.</CustomText>
          )}
          {footerData.contact.text?.length ? (
            footerData.contact.text?.map((text) => (
              <CustomText key={text}>{text}</CustomText>
            ))
          ) : (
            <CustomText>No contact information available.</CustomText>
          )}
        </Flex>
      </Flex>

      {/* Details Section */}
      <Flex
        direction="column"
        align="flex-start"
        mb={{ base: 8, md: 0 }}
        gap={4}
      >
        {/* Empty Heading for alignment */}
        <Heading size="lg" visibility="hidden">
          .
        </Heading>
        <CustomText>
          {footerData.details.text?.length
            ? footerData.details.text?.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : "No details available."}
        </CustomText>
      </Flex>
    </Flex>
  );
};

export default Footer;
