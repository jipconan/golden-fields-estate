import { SectionData } from "../types/appStructureTypes";
import { LANDING_IMAGE, LANDING_ICONS } from "../constants/mediaConstants";

// Landing Page Data
export const landingPageData: SectionData = {
  pageTitle: {
    heading: "FIND YOUR DREAM HOME",
  },
  pageImage: {
    imageAsset: LANDING_IMAGE,
  },
  pageIcons: {
    imageAssets: LANDING_ICONS.map((prop) => ({
      image: prop.image,
      alt: prop.alt,
      heading: prop.heading,
    })),
  },
};
