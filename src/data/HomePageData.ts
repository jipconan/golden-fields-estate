import { SectionData } from "../types/appStructureTypes";
import {
  LANDING_IMAGE,
  LANDING_ICONS,
  GALLERY_SELECTION_IMAGES,
  GALLERY_GRID_IMAGES,
} from "../constants/mediaConstants";

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

export const Section2Data: SectionData = {
  pageTitle: {
    heading: "Feature Properties",
  },
  pageGalleryImages: {
    imageAssets: GALLERY_SELECTION_IMAGES,
  },
  pageGridImages: {
    imageAssets: GALLERY_GRID_IMAGES,
  },
  pageTitle2: {
    heading: "Location",
  },
  pageText: {
    text: "Discover the vibrant neighborhood surrounding our featured properties! Enjoy a mix of shops, restaurants, and parks, along with easy access to public transportation and major highways.",
  },
};
