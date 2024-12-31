import { SearchBar, GalleryGrid } from "../components/Shared";
import { CustomFlex, CustomHeader } from "../components/Shared";
import { useGallery } from "../components/Hooks/useGallery";
import useScrollbarWidth from "../utilties/scrollbarWidth";
import { useSearchParams } from "react-router-dom";

const AgentGalleryPage: React.FC = () => {
  const scrollbarWidth = useScrollbarWidth();
  const [searchParams] = useSearchParams();

  const {
    datas,
    currentDatas,
    visibleDatas,
    handleViewMore,
    loading,
    LoadingComponent,
  } = useGallery("agents", searchParams.toString() || "");

  // console.log("AgentGalleryPage searchParams", searchParams);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <CustomFlex
      direction="column"
      w={["100%", `calc(100vw - ${scrollbarWidth}px)`]}
      minH={["100%", "400px"]}
      my={8}
    >
      <CustomFlex direction="column" w="80%">
        <SearchBar type="agents" />

        <CustomHeader
          textAlign="start"
          alignSelf="flex-start"
          size={["2xl", "3xl"]}
          my={8}
        >
          Our Agents
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

export default AgentGalleryPage;
