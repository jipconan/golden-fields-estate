import { AgentSearchBar } from "../components/Agent/AgentSearchBar";
import AgentCard from "../components/Agent/AgentCard";
import { CustomButton, CustomFlex, CustomHeader } from "../components/Shared";
import { useGallery } from "../components/Hooks/useGallery";
import { AgentProps } from "../types/generalTypes";

const AgentGalleryPage: React.FC = () => {
  const {
    datas,
    currentDatas,
    visibleDatas,
    handleViewMore,
    loading,
    LoadingComponent,
  } = useGallery("agents");

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <CustomFlex direction="column" w="80%" minH={[null, "800px"]} my={8}>
      <AgentSearchBar />

      <CustomHeader
        textAlign="start"
        alignSelf="flex-start"
        size={["4xl", "3xl"]}
        my={8}
      >
        Our Agents
      </CustomHeader>

      <CustomFlex wrap="wrap" gap={[24, 4]} direction={["column", "row"]}>
        {currentDatas
          .filter(
            (data): data is AgentProps =>
              (data as AgentProps).experience !== undefined
          )
          .map((data: AgentProps, index: number) => (
            <CustomFlex
              key={index}
              basis={[null, "calc(25% - 1rem)"]}
              maxW={[null, "calc(25% - 1rem)"]}
            >
              <AgentCard
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
  );
};

export default AgentGalleryPage;
