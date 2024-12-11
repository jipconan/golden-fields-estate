import { Section2Data } from "../../data/HomePageData";
import { LOCATION_IMAGE } from "../../constants/mediaConstants";
import { LocationSearchBar } from "./LocationSearchBar";
import { CustomImage, CustomHeader, CustomText, CustomFlex } from "../Shared";

const LocationSection: React.FC = () => {
  return (
    <CustomFlex direction="column" w="80%" h="60%">
      {/* Section 2 - Location Subsection */}
      <CustomFlex direction="column">
        {/* Location Subsection - Title and Text */}
        <CustomFlex direction={["column", "row"]} gap={[2, 4]}>
          <CustomHeader
            textAlign="start"
            fontWeight="700"
            color="black"
            fontSize={["8xl", "6xl", "9xl"]}
            w="100%"
            h="100%"
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
            fontSize={["5xl", "2xl", "3xl"]}
            mb={[8, 0]}
          >
            {Section2Data.pageText2?.text}
          </CustomText>
        </CustomFlex>
        <CustomImage
          src={LOCATION_IMAGE.image}
          blockSize={["1080px", "500px"]}
        />
        <LocationSearchBar />
      </CustomFlex>
    </CustomFlex>
  );
};

export default LocationSection;
