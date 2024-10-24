import { Flex, Link, Image } from "@chakra-ui/react";
import React from "react";
import { fabData } from "../../data/AppStructureData";
import type { ClickableImageProps, ImageLink } from "../../types/generalTypes";
import type { SectionData } from "../../types/appStructureTypes";

// CustomImage component for the header logo
const CustomImage: React.FC<ClickableImageProps> = ({
  href,
  src,
  ...imageProps
}) => (
  <Link href={href}>
    <Image
      src={src}
      alt="Contact Logo"
      boxSize="80px"
      objectFit="cover"
      my={2}
      p={6}
      borderRadius="50%"
      bg="iconGreen"
      {...imageProps}
    />
  </Link>
);

// FAB component: Floating Contact Icons
const ContactFABGroup: React.FC<SectionData> = () => {
  return (
    <Flex
      direction="column"
      p={2}
      justify="space-between"
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
      {/* FAB Icons */}
      {fabData.contactIcons?.imageLinks &&
        fabData.contactIcons?.imageLinks.map(
          (link: ImageLink, index: number) => (
            <CustomImage key={index} href={link.url} src={link.image} />
          )
        )}
    </Flex>
  );
};

export default ContactFABGroup;
