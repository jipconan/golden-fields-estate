import type { Links } from "./generalTypes";

// Header Types
export interface HeaderSection {
  text?: string[];
  links?: Links[];
  image?: string;
}
export interface HeaderData {
  [key: string]: HeaderSection;
}

// Footer Types
export interface FooterSection {
  heading: string;
  text?: string[];
  links?: Links[];
}
export interface FooterData {
  [key: string]: FooterSection;
}
export interface ContactInfo {
  email: string;
  phone: string;
}
