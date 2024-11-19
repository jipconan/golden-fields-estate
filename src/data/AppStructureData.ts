import type { SectionData } from "../types/AppStructureTypes";
import {
  ETHAN_ADDRESS,
  ETHAN_CONTACT_INFO,
  ETHAN_NAME_AND_ROLE,
} from "../constants/detailsConstants";
import {
  CONTACT_ICONS,
  HEADER_LINKS,
  SITE_MAP_LINKS,
  SOCIAL_MEDIA_LINKS,
} from "../constants/appStructureConstants";
import { COMPANY_LOGO } from "../constants/generalConstants";

// Header Data
export const headerData: SectionData = {
  headerLogo: {
    imageLink: {
      image: COMPANY_LOGO.image,
      url: COMPANY_LOGO.url,
    },
  },
  headerLinks: {
    textLinks: Object.values(HEADER_LINKS).map((prop) => ({
      name: prop.name,
      url: prop.url,
    })),
  },
};

// Footer Data
export const footerData: SectionData = {
  location: {
    heading: "Visit Us",
    texts: ETHAN_ADDRESS.map((prop) => prop),
  },
  siteMap: {
    heading: "Site Map",
    textLinks: SITE_MAP_LINKS,
  },
  contact: {
    heading: "Contact",
    textLinks: Object.values(SOCIAL_MEDIA_LINKS).map((prop) => ({
      name: prop.name,
      url: prop.url,
    })),
    text: ETHAN_CONTACT_INFO.phone,
  },
  details: {
    heading: "",
    texts: [`${ETHAN_NAME_AND_ROLE}`, `- ${ETHAN_CONTACT_INFO.email}`],
  },
};

// FAB Group Data
export const fabData: SectionData = {
  contactIcons: {
    imageLinks: Object.values(CONTACT_ICONS).map((prop) => ({
      image: prop.image,
      url: prop.url,
    })),
  },
};
