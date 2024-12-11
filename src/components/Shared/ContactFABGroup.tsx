import React from "react";
import { fabData } from "../../data/AppStructureData";
import type { ImageLink } from "../../types/generalTypes";
import type { SectionData } from "../../types/AppStructureTypes";
import { CustomImage, CustomFlex } from ".";

// FAB component: Floating Contact Icons
const ContactFABGroup: React.FC<SectionData> = () => {
  return (
    <CustomFlex
      direction="column"
      justify="space-between"
      textAlign="start"
      position="fixed"
      display={["none", "block"]}
      bottom="20px"
      right="20px"
      zIndex="1000"
      w="auto"
      h="auto"
    >
      {/* FAB Icons */}
      {fabData.contactIcons?.imageLinks &&
        fabData.contactIcons?.imageLinks.map(
          (link: ImageLink, index: number) => (
            <CustomImage
              key={index}
              href={link.url}
              src={link.image}
              alt="Contact Logo"
              boxSize={["50px", "80px"]}
              my={2}
              p={[2, 6]}
              borderRadius="50%"
              bg="iconGreen"
            />
          )
        )}
    </CustomFlex>
  );
};

export default ContactFABGroup;
