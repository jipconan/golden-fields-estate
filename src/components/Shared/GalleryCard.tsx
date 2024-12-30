import React from "react";
import { CardProps } from "../../types/generalTypes";
import {
  CustomBox,
  CustomImage,
  CustomHeader,
  CustomButton,
  CustomText,
} from ".";
import { isAgentProps, isPropertyProps } from "../../types/typeGuards";

// Map availability to user-friendly text
const formatAvailability = (availability: boolean | string) => {
  if (typeof availability === "boolean") {
    return availability ? "Available" : "Not Available";
  }
  return availability === "true" ? "Available" : "Not Available";
};

const GalleryCard: React.FC<CardProps> = ({ data, onViewDetails }) => {
  return (
    <CustomBox borderWidth="1px" borderRadius="lg" overflow="hidden">
      <CustomImage
        src={data.imageUrl[0]}
        alt={data.name}
        h={["300px", "8em", "12em", "18em", "24em"]}
      />
      <CustomBox p={[6, 4]}>
        <CustomHeader
          as="h3"
          fontSize={["2xl", "md", "xl", "2xl", "4xl"]}
          minH={["100%", "1em", "1em", "1.5em"]}
          mb={[2, 0]}
        >
          {data.name}
        </CustomHeader>
        <CustomText
          fontSize={["2xl", "sm", "md", "xl", "2xl"]}
          minH={["100%", "2.5em", "1em", "2.5em", "2.5em"]}
          color="gray.500"
          mb={2}
        >
          {isAgentProps(data)
            ? formatAvailability(data.availability) // Format availability for AgentProps
            : isPropertyProps(data)
            ? data.address // Use address for PropertyProps
            : "Unknown"}
        </CustomText>
        <CustomText
          fontSize={["2xl", "xs", "sm", "lg", "2xl"]}
          minH={["100%", "4em", "4em", "4em"]}
          fontWeight="300"
        >
          {data.description}
        </CustomText>
      </CustomBox>
      <CustomButton
        bgColor="lightgrey"
        _hover={{ bg: "grey" }}
        onClick={onViewDetails}
        fontWeight={300}
        borderRadius={0}
        buttonName="View Details"
        color="black"
        my={0}
        minW="100%"
      />
    </CustomBox>
  );
};

export default GalleryCard;
