import React from "react";
import { ContactReviewData } from "../../data/ContactSectionData";
import { ContactReviewImage } from "../../constants/mediaConstants";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const ContactReview: React.FC = () => {
  return (
    <Box
      border="1px solid gainsboro"
      boxShadow={["md", "lg"]}
      p="16px"
      m="16px auto"
      w="100%"
      h="100%"
      py={8}
      minW="500px"
    >
      <Flex alignItems="center" mb="16px" w="100%" h="100%">
        <Image
          src={ContactReviewImage.image}
          alt="Profile"
          boxSize="200px"
          borderRadius="full"
          mr="16px"
        />
        <Box>
          <Text fontSize="60px" fontWeight="bold" lineHeight={1.0}>
            {String(ContactReviewData.agentName.heading)}
          </Text>
          <Flex gap={2}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size="40px" color="orange" />
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text>{String(ContactReviewData.pageText.text)}</Text>
      </Box>
    </Box>
  );
};

export default ContactReview;
