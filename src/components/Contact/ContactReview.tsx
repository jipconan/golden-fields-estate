import React from "react";
import { ContactReviewData } from "../../data/ContactSectionData";
import { ContactReviewImage } from "../../constants/mediaConstants";
import { FaStar } from "react-icons/fa";
import { CustomBox, CustomFlex, CustomText, CustomImage } from "../Shared";

const ContactReview: React.FC = () => {
  return (
    <CustomBox
      border="1px solid gainsboro"
      boxShadow={["md", "lg"]}
      p={[4, 4, 4, 8]}
    >
      <CustomFlex
        alignItems="center"
        direction={["column", "row"]}
        mb="16px"
        gap={[4, 0]}
      >
        <CustomImage
          src={ContactReviewImage.image}
          alt="Profile"
          boxSize={["200px", "14em", "15em", "12em", "13em", "16em", "22em"]}
          borderRadius="full"
          p={[0, "1em"]}
        />
        <CustomBox w="auto">
          <CustomText
            fontSize={["30px", "3em", "3em", "2.2em", "2.2em", "3em", "4.5em"]}
            fontWeight="bold"
            lineHeight={1.0}
          >
            {String(ContactReviewData.agentName.heading)}
          </CustomText>
          <CustomFlex align="flex-start" justify="flex-start" gap={[2, 0]}>
            {[...Array(5)].map((_, index) => (
              <CustomBox
                key={index}
                fontSize={[
                  "30px",
                  "2.5em",
                  "3em",
                  "1.5em",
                  "2em",
                  "3em",
                  "4em",
                ]} // Responsive font size for the icon
                color="orange"
              >
                <FaStar />
              </CustomBox>
            ))}
          </CustomFlex>
        </CustomBox>
      </CustomFlex>
      <CustomBox>
        <CustomText
          fontWeight="500"
          fontSize={["16px", "1.2em", "1.2em,", "1.5em"]}
        >
          {String(ContactReviewData.pageText.text)}
        </CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default ContactReview;
