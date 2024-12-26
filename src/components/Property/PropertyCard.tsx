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
      <CustomImage src={data.imageUrl[0]} alt={data.name} />
      <CustomBox p="6" minH={[null, "250px"]} minW={[null, "350px"]}>
        <CustomHeader as="h3" size={["4xl", "lg"]} mb="2">
          {data.name}
        </CustomHeader>
        <CustomText fontSize={["4xl", "2xl"]} color="gray.500" mb="4">
          {data.status}
        </CustomText>
        <CustomText fontSize={["4xl", "2xl"]} fontWeight="300" mb="4">
          {data.description}
        </CustomText>
      </CustomBox>
      <CustomButton
        bgColor="lightgrey"
        _hover={{ bg: "grey" }}
        onClick={onContact}
        minH={["125px", "75px"]}
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

export default PropertyCard;
