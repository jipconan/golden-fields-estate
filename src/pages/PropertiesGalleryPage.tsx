// import { PropertySearchBar } from "../components/Property/PropertySearchBar";
import PropertyCard from "../components/Property/PropertyCard";
import { CustomButton, CustomFlex, CustomHeader } from "../components/Shared";
import { useGallery } from "../components/Hooks/useGallery";
import { PropertyProps } from "../types/generalTypes";

const PropertiesGalleryPage: React.FC = () => {
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
    <CustomFlex direction="column" my={8} w="80%" mx="auto">
      {/* <PropertySearchBar /> */}
      <CustomFlex direction="column">
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

export default PropertiesGalleryPage;
