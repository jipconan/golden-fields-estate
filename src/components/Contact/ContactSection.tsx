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
      direction={["column", "column", "column", "row"]}
      align="center"
      justify="center"
      my={8}
    >
      <CustomBox flex="1" p={[0, 4, 4]}>
        <CustomHeader as="h2" fontSize={["5xl", "md", "lg", "5xl"]} mb={4}>
          {ContactTextData.pageTitle.heading}
        </CustomHeader>
        <CustomText fontSize={["20px", "sm", "md", "2xl"]} mb={4}>
          {ContactTextData.pageText.text}
        </CustomText>
        <ContactReview />
      </CustomBox>
      <CustomFlex my={8} flex={1}>
        <form>
          {CONTACT_FORM.map((field: string) => (
            <FormControl
              id={field}
              mb={4}
              key={field}
              h={["100%", "4em", "4em", "100px"]}
              w={["100%", "25em", "35em", "50em"]}
            >
              <FormLabel fontSize={["20px", "lg", "xl", "2xl"]}>
                {field}
              </FormLabel>
              <Input
                type="text"
                h={["50px", "2em", "2em", "3em"]}
                fontSize={["20px", "lg", "xl", "2xl"]}
                fontWeight="100"
              />
            </FormControl>
          ))}
          <CustomButton
            onClick={() => alert("Form submitted!")}
            type="submit"
            buttonName="Submit"
            minW={["100%", "12em", "14em", "20em"]}
            fontSize={["20px", "md", "lg", "2xl"]}
          />
        </form>
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactSection;
