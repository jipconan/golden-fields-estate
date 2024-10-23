import { FooterData } from "../types/footerTypes";
import {
  NAME_AND_ROLE,
  SOCIAL_MEDIA_LINKS,
  SITE_MAP_LINKS,
  CONTACT_INFO,
  ADDRESS,
} from "../constants/detailsConstants";

export const footerData: FooterData = {
  location: {
    heading: "Visit Us",
    text: ADDRESS.map((text) => text),
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
    text: [CONTACT_INFO.phone],
  },
  details: {
    heading: "",
    text: [`${NAME_AND_ROLE}`, `- ${CONTACT_INFO.email}`],
  },
};
