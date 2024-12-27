import { LocationSearchBar } from "../components/Location/LocationSearchBar";
import PropertyCard from "../components/Property/PropertyCard";
import { CustomButton, CustomFlex, CustomHeader } from "../components/Shared";
import { useGallery } from "../components/Hooks/useGallery";
import { PropertyProps } from "../types/generalTypes";
import useScrollbarWidth from "../utilties/scrollbarWidth";

const PropertyGalleryPage: React.FC = () => {
  const scrollbarWidth = useScrollbarWidth();
  const {
    datas,
    currentDatas,
    visibleDatas,
    handleViewMore,
    loading,
    LoadingComponent,
  } = useGallery("properties");

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <CustomFlex
      direction="column"
      w={["100%", `calc(100vw - ${scrollbarWidth}px)`]}
      minH={[null, "800px"]}
      my={8}
    >
      <CustomFlex direction="column" w="80%">
        <LocationSearchBar />

        <CustomHeader
          textAlign="start"
          alignSelf="flex-start"
          size={["4xl", "3xl"]}
          my={8}
        >
          Our Properties
        </CustomHeader>

        <CustomFlex wrap="wrap" gap={[24, 4]} direction={["column", "row"]}>
          {currentDatas
            .filter(
              (data): data is PropertyProps =>
                (data as PropertyProps).address !== undefined
            )
            .map((data: PropertyProps, index: number) => (
              <CustomFlex
                key={index}
                basis={[null, "calc(25% - 1rem)"]}
                maxW={[null, "calc(25% - 1rem)"]}
              >
                <PropertyCard
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
      </CustomFlex>
    </CustomFlex>
  );
};

export default PropertyGalleryPage;
