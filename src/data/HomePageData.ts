import { SectionData } from "../types/AppStructureTypes";
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
  pageText: {
    text: "Discover our top picks of the week! These properties offer exceptional value, prime locations, and unique features.",
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
  pageText2: {
    text: "Discover the vibrant neighborhood surrounding our featured properties! Enjoy a mix of shops, restaurants, and parks, along with easy access to public transportation and major highways.",
  },
};

export const Section4Data: SectionData = {
  pageTitle: {
    heading: "Golden Fields",
  },
  pageText: {
    text: "Team",
  },
  pageTitle2: {
    heading: "Meet Our Agents",
  },
  pageText2: {
    text: "Meet our dedicated real estate team! With unique expertise and a passion for helping you find the perfect property, we’re here to guide you with deep local knowledge and exceptional service.",
  },
};
