import type { FooterData, HeaderSection } from "../types/AppStructureTypes";
import {
  ETHAN_ADDRESS,
  ETHAN_CONTACT_INFO,
  ETHAN_NAME_AND_ROLE,
} from "../constants/detailsConstants";
import {
  HEADER_LINKS,
  SITE_MAP_LINKS,
  SOCIAL_MEDIA_LINKS,
} from "../constants/generalConstants";

// Header Data
export const headerData: HeaderSection = {
  links: Object.values(HEADER_LINKS).map((link) => ({
    name: link.name,
    url: link.url,
  })),
};

// Footer Data
export const footerData: FooterData = {
  location: {
    heading: "Visit Us",
    text: ETHAN_ADDRESS.map((text) => text),
  },
  siteMap: {
    heading: "Site Map",
    links: SITE_MAP_LINKS,
  },
  contact: {
    heading: "Contact",
    links: Object.values(SOCIAL_MEDIA_LINKS).map((link) => ({
      name: link.name,
      url: link.url,
    })),
    text: [ETHAN_CONTACT_INFO.phone],
  },
  details: {
    heading: "",
    text: [`${ETHAN_NAME_AND_ROLE}`, `- ${ETHAN_CONTACT_INFO.email}`],
  },
};
