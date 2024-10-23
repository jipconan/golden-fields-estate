import { Links } from "../types/generalTypes";

// Header Links
export const HEADER_LINKS: Links[] = [
  { name: "Properties", url: "/properties" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// Site Map Links
export const SITE_MAP_LINKS: Links[] = [
  { name: "Home", url: "/" },
  { name: "Properties", url: "/properties" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// Social Media Links
export const SOCIAL_MEDIA_LINKS: Record<string, Links> = {
  Facebook: { name: "Facebook", url: "https://facebook.com" },
  Instagram: { name: "Instagram", url: "https://instagram.com" },
  LinkedIn: { name: "LinkedIn", url: "https://linkedin.com" },
};
