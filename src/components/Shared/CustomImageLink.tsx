import { CustomLink, CustomImage } from "../Shared";
import { ClickableImageProps } from "../../types/generalTypes";

// CustomImageLink component for the header logo
const CustomImageLink: React.FC<ClickableImageProps> = ({
  href,
  pointerEvents,
  ...props
}) => (
  <CustomLink href={href} pointerEvents={pointerEvents}>
    <CustomImage {...props} />
  </CustomLink>
);

export default CustomImageLink;
