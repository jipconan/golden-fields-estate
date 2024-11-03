import { ImageProps, LinkProps } from "@chakra-ui/react";

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
  linkProps?: LinkProps;
}

export interface ContactInfo {
  email: string;
  phone: string;
}
