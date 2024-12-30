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
        <CustomHeader
          as="h2"
          fontSize={["5xl", "7xl", "8xl", "7xl", "8xl", "9xl"]}
          mb={4}
        >
          {ContactTextData.pageTitle.heading}
        </CustomHeader>
        <CustomText fontSize={["20px", "md", "lg", "lg", "2xl"]} mb={4}>
          {ContactTextData.pageText.text}
        </CustomText>

        <ContactReview />
      </CustomBox>

      <CustomFlex my={8} flex={1}>
        <form>
          {CONTACT_FORM.map((field: string) => (
            <FormControl id={field} mb={4} key={field}>
              <FormLabel fontSize={["20px", "lg", "xl", "xl", "2xl"]}>
                {field}
              </FormLabel>
              <Input
                type="text"
                h={["50px", "2.5em", "2.5em", "3em"]}
                fontSize={["20px", "lg", "xl", "2xl"]}
                fontWeight="100"
              />
            </FormControl>
          ))}
          <CustomButton
            onClick={() => alert("Form submitted!")}
            type="submit"
            buttonName="Submit"
          />
        </form>
      </CustomFlex>
    </CustomFlex>
  );
};

export default ContactSection;
