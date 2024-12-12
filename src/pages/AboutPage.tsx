import { AboutPageData } from "../data/AboutPageData";
import { AboutPageImage } from "../constants/mediaConstants";
import ContactSection from "../components/Contact/ContactSection";
import {
  CustomImage,
  CustomHeader,
  CustomText,
  CustomFlex,
} from "../components/Shared";

// AboutPage component
const AboutPage: React.FC = () => {
  return (
    <CustomFlex
      direction="column"
      w="80%"
      minH={[null, "1200px"]}
      py={["20%", 0]}
      mx="auto"
    >
      {/* Landing Image */}
      <CustomFlex direction="column" gap={4}>
        <CustomImage src={AboutPageImage.image} alt={AboutPageImage.alt} />
        <CustomText fontSize={["4xl", "2xl", "3xl"]}>
          {AboutPageData.pageText.text}
        </CustomText>
      </CustomFlex>

      {/* Image Header */}
      <CustomFlex gap={[12, 4]} direction={["column", "row"]} my={[12, null]}>
        {/* About Us Title */}
        <CustomFlex direction="column" textAlign={"start"}>
          <CustomHeader fontSize={["9xl", "7xl", "9xl"]} lineHeight={1}>
            {AboutPageData.pageTitle.heading}
          </CustomHeader>
        </CustomFlex>

        {/* At Golden Fields Realty Section */}
        <CustomFlex direction="column">
          {/* At Golden Fields Realty title */}
          <CustomHeader fontSize={["6xl", "3xl", "5xl"]}>
            {AboutPageData.pageTitle2.heading}
          </CustomHeader>
          {/* At Golden Fields Realty description */}
          <CustomText fontSize={["5xl", "lg", "3xl"]}>
            {AboutPageData.pageText2.text}
          </CustomText>
        </CustomFlex>
      </CustomFlex>

      {/* Contact Section Component */}
      <ContactSection />
    </CustomFlex>
  );
};

export default AboutPage;
