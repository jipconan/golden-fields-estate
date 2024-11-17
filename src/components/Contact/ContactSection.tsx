import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { ContactTextData } from "../../data/ContactSectionData";
import { CONTACT_FORM } from "../../constants/contactConstants";
import ContactReview from "./ContactReview";

const ContactText: React.FC = () => {
  return (
    <Box p={8} w="80%" h="100%" alignContent="center" justifyContent="center">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
      >
        <Box flex="1" p={4}>
          <Heading as="h2" fontSize="9xl" mb={4}>
            {ContactTextData.pageTitle.heading}
          </Heading>
          <Text fontSize="xl" mb={4}>
            {ContactTextData.pageText.text}
          </Text>
          <ContactReview />
        </Box>
        <Box flex="1" p={4} w="100%" h="100%">
          <form>
            {CONTACT_FORM.map((field: string) => (
              <FormControl id={field} mb={4} key={field} height="100px">
                <FormLabel fontSize="3xl">{field}</FormLabel>
                <Input type="text" h="50px" />
              </FormControl>
            ))}
            <Button colorScheme="teal" size="lg" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactText;
