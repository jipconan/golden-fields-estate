import React from "react";
import { PropertyCardProps } from "../../types/generalTypes";
import {
  CustomBox,
  CustomImage,
  CustomHeader,
  CustomButton,
  CustomText,
} from "../Shared";

const PropertyCard: React.FC<PropertyCardProps> = ({ data, onContact }) => {
  return (
    <CustomBox borderWidth="1px" borderRadius="lg" overflow="hidden">
      <CustomImage
        src={data.imageUrl[0]}
        alt={data.name}
        h={["300px", "240px"]}
      />
      <CustomBox p={[6, 4]} minH={[null, "150px"]}>
        <CustomHeader as="h3" size={["2xl", "lg"]} mb={[2, 0]}>
          {data.name}
        </CustomHeader>
        <CustomText fontSize={["20px", "xl"]} color="gray.500" mb={2}>
          {data.status}
        </CustomText>
        <CustomText fontSize={["20px", "xl"]} fontWeight="300" mb={2}>
          {data.description}
        </CustomText>
      </CustomBox>
      <CustomButton
        bgColor="lightgrey"
        _hover={{ bg: "grey" }}
        onClick={onContact}
        minH={["65px", "55px"]}
        fontSize={["20px", "2xl"]}
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

export default PropertyCard;
