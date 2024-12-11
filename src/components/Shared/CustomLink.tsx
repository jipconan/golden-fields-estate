import { Link, LinkProps } from "@chakra-ui/react";

const CustomLink: React.FC<LinkProps> = (props) => (
  <Link
    fontSize={["4xl", "2xl"]}
    fontWeight="300"
    textAlign="start"
    alignContent="center"
    justifyContent="center"
    aria-label={`Visit ${props["aria-label"]} link`}
    w="auto"
    h="auto"
    _hover={{
      textDecoration: "underline",
      color: "black",
    }}
    {...props}
  />
);

export default CustomLink;
