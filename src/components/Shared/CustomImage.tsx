import { Image } from "@chakra-ui/react";
import { ClickableImageProps } from "../../types/generalTypes";

// CustomImage component for consistent heading styling
const CustomImage: React.FC<ClickableImageProps> = ({ src, alt, ...props }) => (
  <Image src={src} alt={alt} objectFit="cover" w="100%" h="100%" {...props} />
);

export default CustomImage;
