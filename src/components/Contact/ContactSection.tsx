import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ContactTextData } from "../../data/ContactSectionData";
import { CONTACT_FORM } from "../../constants/generalConstants";
import ContactReview from "./ContactReview";
import {
  CustomFlex,
  CustomButton,
  CustomHeader,
  CustomText,
  CustomBox,
} from "../Shared";

const ContactSection: React.FC = () => {
  return (
    <CustomFlex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      py={10}
    >
      <CustomBox flex="1" p={4}>
        <CustomHeader as="h2" fontSize="5xl" mb={4}>
          {ContactTextData.pageTitle.heading}
        </CustomHeader>
        <CustomText fontSize={["20px", "2xl"]} mb={4}>
          {ContactTextData.pageText.text}
        </CustomText>
        <ContactReview />
      </CustomBox>
      <CustomBox flex="1" p={4} w="100%" h="100%">
        <form>
          {CONTACT_FORM.map((field: string) => (
            <FormControl id={field} mb={4} key={field} h={["100%", "100px"]}>
              <FormLabel fontSize={["20px", "2xl"]}>{field}</FormLabel>
              <Input
                type="text"
                h={["50px", "50px"]}
                fontSize={["20px", "2xl"]}
                fontWeight="100"
              />
            </FormControl>
          ))}
          <CustomButton
            onClick={() => alert("Form submitted!")}
            type="submit"
            buttonName="Submit"
            minW={["100%", "20em"]}
          />
        </form>
      </CustomBox>
    </CustomFlex>
  );
};

export default ContactSection;
