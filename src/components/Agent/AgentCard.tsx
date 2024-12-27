import React from "react";
import { AgentCardProps } from "../../types/generalTypes";
import {
  CustomBox,
  CustomImage,
  CustomHeader,
  CustomButton,
  CustomText,
} from "../Shared";

const AgentCard: React.FC<AgentCardProps> = ({ data, onContact }) => {
  return (
    <CustomBox borderWidth="1px" borderRadius="lg" overflow="hidden">
      <CustomImage
        src={data.imageUrl[0]}
        alt={data.name}
        h={["800px", "240px"]}
      />
      <CustomBox p={[8, 4]} minH={[null, "150px"]}>
        <CustomHeader as="h3" size={["4xl", "lg"]} mb={[8, 0]}>
          {data.name}
        </CustomHeader>
        <CustomText fontSize={["4xl", "xl"]} color="gray.500" mb={4}>
          {data.availability}
        </CustomText>
        <CustomText fontSize={["4xl", "xl"]} fontWeight="300" mb={4}>
          {data.description}
        </CustomText>
      </CustomBox>
      <CustomButton
        bgColor="lightgrey"
        _hover={{ bg: "grey" }}
        onClick={onContact}
        minH={["125px", "55px"]}
        fontSize={["5xl", "2xl"]}
        fontWeight={300}
        borderRadius={0}
        buttonName="Contact"
        color="black"
        w="100%"
        h="100%"
        my={0}
      />
    </CustomBox>
  );
};

export default AgentCard;
