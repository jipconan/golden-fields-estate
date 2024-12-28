// Section2.tsx
import { ImageAsset } from "../../../types/generalTypes";
import { Section2Data } from "../../../data/HomePageData";
import FeatureProperties from "../../../components/Property/FeatureProperties";
import { CustomImage, CustomFlex } from "../../../components/Shared";

const Section2: React.FC = () => (
  <CustomFlex direction="column" minH={["100%", "800px"]}>
    {/* Section 2 - Feature Properties Subsection */}
    <FeatureProperties />

    {/* Section 2 - Grid Images Subsection */}

    <CustomFlex
      direction={["column", "row"]}
      justify="space-between"
      w="80%"
      gap={[20, null]}
    >
      {Section2Data.pageGridImages.imageAssets?.map(
        (icon: ImageAsset, index: number) => (
          <CustomImage
            key={index}
            src={icon.image}
            alt={icon.alt}
            boxSize={["350px", "12vw"]}
          />
        )
      )}
    </CustomFlex>
  </CustomFlex>
);

export default Section2;
