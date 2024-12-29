import { SearchBar, GalleryGrid } from "../components/Shared";
import { CustomFlex, CustomHeader } from "../components/Shared";
import { useGallery } from "../components/Hooks/useGallery";
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
        <SearchBar type="properties" />

        <CustomHeader
          textAlign="start"
          alignSelf="flex-start"
          size={["4xl", "3xl"]}
          my={8}
        >
          Our Properties
        </CustomHeader>

        <GalleryGrid
          datas={datas}
          currentDatas={currentDatas}
          visibleDatas={visibleDatas}
          handleViewMore={handleViewMore}
          galleryGridCheck={true}
        />
      </CustomFlex>
    </CustomFlex>
  );
};

export default PropertyGalleryPage;
