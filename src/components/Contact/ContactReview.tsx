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
      p="16px"
      m="16px auto"
      py={8}
      minW="500px"
    >
      <CustomFlex alignItems="center" mb="16px">
        <CustomImage
          src={ContactReviewImage.image}
          alt="Profile"
          boxSize={["300px", "200px"]}
          borderRadius="full"
          mr="16px"
        />
        <CustomBox>
          <CustomText
            fontSize={["6xl", "60px"]}
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
        <CustomText fontWeight="500" fontSize={["3xl", "initial"]}>
          {String(ContactReviewData.pageText.text)}
        </CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default ContactReview;
