import { Links } from "./generalTypes";

export interface FooterSection {
  heading: string;
  text?: string[];
  links?: Links[];
}

export interface FooterData {
  location: FooterSection;
  siteMap: FooterSection;
  contact: FooterSection;
  details: FooterSection;
}

export interface ContactInfo {
  email: string;
  phone: string;
}
