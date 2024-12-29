// Section2.tsx
import { Section4Data } from "../../../data/HomePageData";
import { GalleryGrid } from "../../../components/Shared";
import {
  CustomButton,
  CustomHeader,
  CustomText,
  CustomFlex,
} from "../../../components/Shared";
import { useGallery } from "../../../components/Hooks/useGallery";

const Section4: React.FC = () => {
  const { datas, loading, LoadingComponent } = useGallery("agents");

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <CustomFlex direction="column" minH={["100%", "sm", "md", "lg"]} w="80%">
      <CustomFlex direction={["column", "row"]} gap={4} my={[24, 0, 0]}>
        {/* Section 4 - Title Subsection */}
        <CustomFlex direction="column">
          <CustomHeader
            fontSize={["50px", "7xl", "7xl", "9xl"]}
            lineHeight={1}
            textAlign="start"
          >
            {Section4Data.pageTitle.heading}
          </CustomHeader>
          <CustomHeader
            fontSize={["40px", "5xl", "5xl", "7xl"]}
            textAlign="start"
          >
            {Section4Data.pageText.text}
          </CustomHeader>
        </CustomFlex>

        {/* Section 4 - Description Subsection */}
        <CustomFlex direction="column" minH={["100%", "400px"]}>
          <CustomHeader fontSize={["30px", "3xl", "3xl", "5xl"]}>
            {Section4Data.pageTitle2.heading}
          </CustomHeader>
          <CustomText fontSize={["20px", "lg", "lg", "3xl"]}>
            {Section4Data.pageText2.text}
          </CustomText>
        </CustomFlex>
      </CustomFlex>

      {/* Section 4 - Agents Subsection */}
      <GalleryGrid datas={datas} galleryGridCheck={false} />

      {/* View More Button */}
      <CustomButton
        onClick={() => (window.location.href = "/agents")}
        buttonName="View More"
      />
    </CustomFlex>
  );
};

export default Section4;
