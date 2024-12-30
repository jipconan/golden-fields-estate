import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { CustomBox, CustomFlex, CustomText } from "../Shared";

// Hook to manage loading state
// eslint-disable-next-line react-refresh/only-export-components
export function useLoading() {
  const [loading, setLoading] = useState<boolean>(true);

  const LoadingComponent = () => {
    if (loading) {
      return (
        <CustomBox bg="white">
          <CustomFlex my={8} h="100vh" minH="100%">
            <Spinner
              thickness="8px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size={["xl", "xxl"]}
            />
          </CustomFlex>
        </CustomBox>
      );
    }
    return null;
  };

  return { loading, setLoading, LoadingComponent };
}

// Hook to manage error state
// eslint-disable-next-line react-refresh/only-export-components
export function useError() {
  const [error, setError] = useState<string | null>(null);

  const ErrorComponent = () => {
    if (error) {
      return <CustomText color="red.500">{error}</CustomText>;
    }
    return null;
  };

  return { error, setError, ErrorComponent };
}

// ScrollToTop
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
