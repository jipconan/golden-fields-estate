import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSectionData: FaqItem[] = [
  {
    question: "How do I contact the property owner or agent?",
    answer:
      "Contact details are on each property page. You can message or call directly.",
  },
  {
    question: "How do I search for properties?",
    answer: "Use the search bar to filter by location, price, type, and more.",
  },
  {
    question: "What types of properties are listed?",
    answer:
      "We offer apartments, houses, townhomes, and commercial properties for sale and rent.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <Flex
      direction="column"
      h="100%"
      w="100%"
      bgColor="teal.500"
      color="white"
      p={24}
    >
      <Heading fontSize="6xl" my={4}>
        FAQ
      </Heading>
      <Accordion allowToggle w="100%">
        {FaqSectionData.map((faq, index) => (
          <AccordionItem
            key={index}
            border="none"
            borderBottom="1px solid white"
          >
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="2xl">{faq.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="xl">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default FaqSection;
