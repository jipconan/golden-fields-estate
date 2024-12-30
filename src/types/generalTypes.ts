import { HeadingProps, ImageProps, LinkProps } from "@chakra-ui/react";

export type TextLink = {
  name: string;
  url: string;
};

export type ImageAsset = {
  image: string;
  alt: string;
  heading?: string;
};

export type ImageLink = {
  image: string;
  url: string;
};

export interface ClickableImageProps extends ImageProps {
  href?: string;
  src?: string;
  alt?: string;
  linkProps?: LinkProps;
}

export interface ClickableIconProps extends ImageProps {
  src?: string;
  alt?: string;
  heading?: string;
  imageProps?: ImageProps;
  headingProps?: HeadingProps;
  linkProps?: LinkProps;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface AgentProps {
  _id: string;
  name: string;
  experience: number;
  languages: string[];
  description: string;
  about: string;
  imageUrl: string[];
  seniority: string;
  specialties: string[];
  email: string;
  phone: string;
  properties: string[];
  availability: boolean;
  type: string;
}

export interface PropertyProps {
  _id: string;
  name: string;
  location: string;
  propertyType: string;
  price: number;
  description: string;
  imageUrl: string[];
  floorPlanUrl: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  status: string;
  agents: string[];
  type: string;
  size: number;
}

export interface CardProps {
  data: AgentProps | PropertyProps;
  onViewDetails: () => void;
}
