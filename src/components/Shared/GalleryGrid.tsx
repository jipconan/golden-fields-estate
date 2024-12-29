import React from "react";
import { CustomFlex, GalleryCard, CustomButton } from "../Shared";
import { AgentProps, PropertyProps } from "../../types/generalTypes";
import { useBreakpointValue } from "@chakra-ui/react";

type GalleryGridProps = {
  datas?: (AgentProps | PropertyProps)[];
  currentDatas?: (AgentProps | PropertyProps)[];
  visibleDatas?: number;
  handleViewMore?: () => void;
  galleryGridCheck: boolean;
};

const GalleryGrid: React.FC<GalleryGridProps> = ({
  datas,
  currentDatas,
  visibleDatas,
  handleViewMore,
  galleryGridCheck,
}) => {
  const itemsToSlice = useBreakpointValue([4, 3, 3, 4]) || 4;

  return (
    <>
      {!galleryGridCheck && datas && (
        <CustomFlex wrap="wrap" direction={["column", "row"]}>
          {datas.slice(0, itemsToSlice).map((data, index) => (
            <CustomFlex
              key={index}
              flex={`0 0 calc(100% / ${itemsToSlice})`}
              mx={0}
              p={[0, 2, 2, 2]}
            >
              <GalleryCard
                data={data}
                onContact={() => alert(`Contacting ${data.name}`)}
              />
            </CustomFlex>
          ))}
        </CustomFlex>
      )}
      {galleryGridCheck &&
        datas &&
        currentDatas &&
        visibleDatas &&
        handleViewMore && (
          <>
            <CustomFlex
              wrap="wrap"
              direction={["column", "row"]}
              justifyContent="flex-start"
            >
              {currentDatas.map((data, index) => (
                <CustomFlex
                  key={index}
                  flex={`0 0 calc(100% / ${itemsToSlice})`}
                  mx={0}
                  px={[0, 2, 2, 4]}
                  py={[2, 2, 2, 4]}
                >
                  <GalleryCard
                    data={data}
                    onContact={() => alert(`Contacting ${data.name}`)}
                  />
                </CustomFlex>
              ))}
            </CustomFlex>
            {visibleDatas < datas.length && (
              <CustomFlex minH={[null, "0"]}>
                <CustomButton onClick={handleViewMore} buttonName="View More" />
              </CustomFlex>
            )}
          </>
        )}
    </>
  );
};

export default GalleryGrid;
