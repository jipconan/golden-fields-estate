import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CustomFlex, CustomHeader, CustomBox, CustomText } from "../Shared";
import { FaqSectionData } from "../../data/FaqData";

const FaqSection: React.FC = () => {
  return (
    <CustomFlex
      direction="column"
      bgColor="teal.500"
      color="white"
      py={[8, 10, 24]}
      px={[8, 16, 24]}
    >
      <CustomHeader fontSize={["50px", "4xl", "6xl"]} my={4} color="white">
        FAQ
      </CustomHeader>
      <Accordion allowToggle w="100%">
        {FaqSectionData.map((faq, index) => (
          <AccordionItem
            key={index}
            border="none"
            borderBottom="1px solid white"
          >
            <h2>
              <AccordionButton fontSize={["20px", "xl"]}>
                <CustomBox flex="1">
                  <CustomText fontSize={["20px", "md", "2xl"]} color="white">
                    {faq.question}
                  </CustomText>
                </CustomBox>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontSize={["20px", "md", "xl"]}
              fontWeight="500"
              textAlign="start"
            >
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </CustomFlex>
  );
};

export default FaqSection;
