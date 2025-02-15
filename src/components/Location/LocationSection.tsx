import { Section2Data } from "../../data/HomePageData";
import { LOCATION_IMAGE } from "../../constants/mediaConstants";
import { SearchBar } from "../Shared";
import { CustomImage, CustomHeader, CustomText, CustomFlex } from "../Shared";

const LocationSection: React.FC = () => {
  return (
    <CustomFlex direction="column" w="80%">
      {/* Section 2 - Location Subsection */}
      <CustomFlex direction="column">
        {/* Location Subsection - Title and Text */}
        <CustomFlex direction={["column", "row"]} gap={[2, 4]}>
          <CustomHeader
            textAlign="start"
            fontWeight="700"
            color="black"
            fontSize={["50px", "5xl", "6xl", "9xl"]}
          >
            {Section2Data.pageTitle2?.heading}
          </CustomHeader>
          <CustomText
            textAlign="start"
            fontWeight="100"
            color="black"
            lineHeight="1.2"
            w={["100%", "200%"]}
            h="100%"
            fontSize={["20px", "sm", "md", "3xl"]}
            mb={[8, 0]}
          >
            {Section2Data.pageText2?.text}
          </CustomText>
        </CustomFlex>
        <CustomImage
          src={LOCATION_IMAGE.image}
          blockSize={["300px", "12em", "13em", "30em", "35em"]}
        />
        <SearchBar type="properties" />
      </CustomFlex>
    </CustomFlex>
  );
};

export default LocationSection;
