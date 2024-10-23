import { Button, useToast } from "@chakra-ui/react";
import React from "react";

const SuccessNotificationToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Success!",
          description:
            "We've received your message and will be in touch shortly!",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default SuccessNotificationToast;
