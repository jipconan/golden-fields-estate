import type { TextLink, ImageLink, ImageAsset } from "./generalTypes";

// Header Types
export interface Section {
  heading?: string;
  text?: string;
  texts?: string[];
  textLink?: TextLink;
  textLinks?: TextLink[];
  imageAsset?: ImageAsset;
  imageAssets?: ImageAsset[];
  imageLink?: ImageLink;
  imageLinks?: ImageLink[];
}
export interface SectionData {
  [key: string]: Section;
}
export interface FaqData {
  question: string;
  answer: string;
}
