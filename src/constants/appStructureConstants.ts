import { ImageLink, TextLink } from "../types/generalTypes";

// Header Links
export const HEADER_LINKS: TextLink[] = [
  { name: "Properties", url: "/featureproperties" },
  { name: "Agents", url: "/agents" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// Site Map Links
export const SITE_MAP_LINKS: TextLink[] = [
  { name: "Home", url: "/" },
  { name: "Properties", url: "/featureproperties" },
  { name: "Agents", url: "/agents" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// Social Media Links
export const SOCIAL_MEDIA_LINKS: Record<string, TextLink> = {
  Facebook: { name: "Facebook", url: "https://facebook.com" },
  Instagram: { name: "Instagram", url: "https://instagram.com" },
  LinkedIn: { name: "LinkedIn", url: "https://linkedin.com" },
};

// FAB Contact Icons
export const CONTACT_ICONS: ImageLink[] = [
  { image: "/fab-icons/telephone_icon.svg", url: "tel:+1234567890" },
  { image: "/fab-icons/email_icon.svg", url: "mailto:your-email@example.com" },
  { image: "/fab-icons/message_icon.svg", url: "sms:+1234567890" },
];
