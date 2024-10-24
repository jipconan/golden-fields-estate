import { ImageAsset, ImageAssetWithHeader } from "../types/generalTypes";

// Images
export const LANDING_IMAGE: ImageAsset = {
  image: "/landing-pages/landingpage_image.jpg",
  alt: "LANDING_IMAGE",
};

// Icons
export const LANDING_ICONS: ImageAssetWithHeader[] = [
  {
    image: "/icons/city_icon.svg",
    alt: "CITY_ICON",
    heading: "Discover a home",
  },
  {
    image: "/icons/calender_icon.svg",
    alt: "CALENDER_ICON",
    heading: "Schedule a visit",
  },
  {
    image: "/icons/cashnote_icon.svg",
    alt: "CASHNOTE_ICON",
    heading: "Hassle-free purchase",
  },
  {
    image: "/icons/thumbsup_icon.svg",
    alt: "THUMBSUP_ICON",
    heading: "Buy back guarentee",
  },
];
