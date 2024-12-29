import React from "react";
import { ContactReviewData } from "../../data/ContactSectionData";
import { ContactReviewImage } from "../../constants/mediaConstants";
import { FaStar } from "react-icons/fa";
import { CustomBox, CustomFlex, CustomText, CustomImage } from "../Shared";

const ContactReview: React.FC = () => {
  return (
    <CustomBox border="1px solid gainsboro" boxShadow={["md", "lg"]} p={8}>
      <CustomFlex
        alignItems="center"
        direction={["column", "row"]}
        mb="16px"
        gap={[12, 0]}
      >
        <CustomImage
          src={ContactReviewImage.image}
          alt="Profile"
          boxSize={["200px", "10em", "10em", "20em"]}
          borderRadius="full"
          mr={[0, "2em"]}
        />
        <CustomBox>
          <CustomText
            fontSize={["30px", "3em", "3em", "4em"]}
            fontWeight="bold"
            lineHeight={1.0}
          >
            {String(ContactReviewData.agentName.heading)}
          </CustomText>
          <CustomFlex align="flex-start" justify="flex-start" gap={2}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size="40px" color="orange" />
            ))}
          </CustomFlex>
        </CustomBox>
      </CustomFlex>
      <CustomBox>
        <CustomText fontWeight="500" fontSize={["16px", "1em", "1em", "1.5em"]}>
          {String(ContactReviewData.pageText.text)}
        </CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default ContactReview;
