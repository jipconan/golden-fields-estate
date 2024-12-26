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
    >
      <CustomBox flex="1" p={4}>
        <CustomHeader as="h2" fontSize="9xl" mb={4}>
          {ContactTextData.pageTitle.heading}
        </CustomHeader>
        <CustomText fontSize={["5xl", "xl"]} mb={4}>
          {ContactTextData.pageText.text}
        </CustomText>
        <ContactReview />
      </CustomBox>
      <CustomBox flex="1" p={4} w="100%" h="100%">
        <form>
          {CONTACT_FORM.map((field: string) => (
            <FormControl id={field} mb={4} key={field} h={["200px", "100px"]}>
              <FormLabel fontSize={["5xl", "3xl"]}>{field}</FormLabel>
              <Input
                type="text"
                h={["100px", "50px"]}
                fontSize={["5xl", "3xl"]}
                fontWeight="100"
              />
            </FormControl>
          ))}
          <CustomButton
            onClick={() => alert("Form submitted!")}
            type="submit"
            buttonName="Submit"
            w={["100%", null]}
          />
        </form>
      </CustomBox>
    </CustomFlex>
  );
};

export default ContactSection;
