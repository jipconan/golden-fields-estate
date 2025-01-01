import {
  SearchBar,
  CustomFlex,
  CustomText,
  CustomHeader,
  CustomImage,
} from "../components/Shared";
import { useParams } from "react-router-dom";
import { PropertyProps } from "../types/generalTypes";
import { useState, useEffect } from "react";
import { useLoading } from "../components/Hooks/PageUtils";
import { getPropertyById } from "../service/properties";
import { IconButton } from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { LOCATION_IMAGE } from "../constants/mediaConstants";

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PropertyProps>();
  const { loading, setLoading, LoadingComponent } = useLoading();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const uniformSize = ["md", "xs", "sm", "lg", "2xl", "2xl", "2xl"];

  const handlePrevImage = () => {
    if (data) {
      setSelectedImage((prevIndex: number) =>
        prevIndex > 0 ? prevIndex - 1 : data.imageUrl.length - 1
      );
    }
  };

  const handleNextImage = () => {
    if (data) {
      setSelectedImage((prevIndex: number) =>
        prevIndex < data.imageUrl.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    if (data) {
      if (index === data.imageUrl.length) {
        setSelectedImage(index);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          const fetchedData = await getPropertyById(id);
          setData(fetchedData);
        } else {
          console.error("ID is undefined");
        }
      } catch (error) {
        console.error(`Error fetching property with ID ${id}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setLoading]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (!data) {
    return <CustomText>No data found for this property.</CustomText>;
  }

  return (
    <CustomFlex
      direction="column"
      w="90%"
      minH={[null, "400px", "600px", "800px", "800px", "1200px"]}
      fontSize={uniformSize}
    >
      {/* SearchBar */}
      <SearchBar type="properties" />

      {/* Property Info */}
      <CustomFlex
        direction={["column-reverse", "row"]}
        my={12}
        gap={4}
        w="inherit"
      >
        <CustomFlex
          direction={["row", "column"]}
          gap={[6, 4, 4, 12]}
          justify="start"
          align="start"
        >
          <CustomFlex direction="column" align="start" justify="start" gap={4}>
            {/* Property name */}
            <CustomHeader fontSize={["3xl", "2xl", "4xl", "5xl", "7xl", "8xl"]}>
              {data.name}
            </CustomHeader>

            {/* Main Image */}
            <CustomFlex
              direction={["column-reverse", "row"]}
              gap={8}
              align="start"
              justify="start"
              flex="1"
            >
              <CustomImage
                src={data.imageUrl[selectedImage]}
                alt={`Property image ${data.imageUrl[selectedImage]}`}
                objectFit="cover"
                w={["20em", "20em", "25em", "25em", "20em", "25em", "28em"]} // Consistent width
                h={["15em", "15em", "15em", "15em", "15em", "15em", "16em"]}
              />

              <CustomFlex
                direction="column"
                align="start"
                justify="start"
                gap={[4, 1, 1, 2, 4, 4, 4]}
                flex="1"
              >
                <CustomFlex direction="row">
                  <CustomText fontWeight={400}>${data.price}</CustomText>
                  <CustomText>{data.size}ft</CustomText>
                  <CustomText>{data.bedrooms} Beds</CustomText>
                  <CustomText>{data.bathrooms} Baths</CustomText>
                </CustomFlex>

                <CustomText fontWeight={300}>{data.address}</CustomText>

                <CustomText>{data.description}</CustomText>

                <CustomImage
                  src={LOCATION_IMAGE.image}
                  objectFit="cover"
                  blockSize={["100px", "10em", "11em", "11em", "12em"]}
                />
              </CustomFlex>
            </CustomFlex>

            {/* Property Images */}
            <CustomFlex direction="row" gap={[4, 2, 2, 4]} mb={[12, 0]}>
              <IconButton
                aria-label="Previous Image"
                icon={<MdArrowBack />}
                onClick={handlePrevImage}
                bgColor="white"
                border="solid 1px black"
                borderRadius="50%"
                ml={{ base: 2, md: 8 }}
              />

              {data.imageUrl.map((url, index) => (
                <CustomImage
                  key={index}
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  w={["50px", "5em", "5em", "5em", "5em"]}
                  blockSize={["50px", "5em", "5em", "5em", "5em"]}
                  objectFit="cover"
                  border={
                    selectedImage === index ? "0.25em solid teal" : "none"
                  }
                  cursor="pointer"
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
              <IconButton
                aria-label="Next Image"
                icon={<MdArrowForward />}
                onClick={handleNextImage}
                zIndex="10"
                bgColor="white"
                border="solid 1px black"
                borderRadius="50%"
                mr={{ base: 2, md: 8 }}
              />
            </CustomFlex>
          </CustomFlex>
        </CustomFlex>
      </CustomFlex>
    </CustomFlex>
  );
};

export default PropertyPage;
