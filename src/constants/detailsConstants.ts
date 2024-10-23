import { Links } from "../types/generalTypes";
import { ContactInfo } from "../types/footerTypes";

// general used details for footer
export const NAME_AND_ROLE: string = "Ethan Brooks, Marketing Manager";

// general used contact info for footer
export const CONTACT_INFO: ContactInfo = {
  email: "ethan.b@email.com",
  phone: "(555) 894-3276",
};

// general used address for footer
export const ADDRESS: string[] = [
  "1247 MapleWood Avenue,",
  "Greenbrook, NY 11575, USA",
];

// general used Site Map links for footer
export const SITE_MAP_LINKS: Links[] = [
  { name: "Home", url: "/" },
  { name: "Properties", url: "/properties" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// general used social media links
export const SOCIAL_MEDIA_LINKS: Record<string, Links> = {
  Facebook: { name: "Facebook", url: "https://facebook.com" },
  Instagram: { name: "Instagram", url: "https://instagram.com" },
  LinkedIn: { name: "LinkedIn", url: "https://linkedin.com" },
};
