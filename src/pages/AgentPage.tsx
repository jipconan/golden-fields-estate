import {
  SearchBar,
  CustomFlex,
  CustomText,
  CustomHeader,
  CustomImage,
} from "../components/Shared";
import { useParams } from "react-router-dom";
import { AgentProps } from "../types/generalTypes";
import { useState, useEffect } from "react";
import { useLoading } from "../components/Hooks/PageUtils";
import { getAgentById } from "../service/agents";

const AgentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<AgentProps>();
  const { loading, setLoading, LoadingComponent } = useLoading();

  const uniformSize = ["xl", "xs", "sm", "lg", "3xl"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          const fetchedData = await getAgentById(id);
          setData(fetchedData);
        } else {
          console.error("ID is undefined");
        }
      } catch (error) {
        console.error(`Error fetching agent with ID ${id}:`, error);
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
    return <CustomText>No data found for this agent.</CustomText>;
  }

  return (
    <CustomFlex
      direction="column"
      w={["90%", "90%", "90%", "90%", "90%", "85%"]}
      minH={[null, "400px", "600px", "800px", "800px", "1200px"]}
      fontSize={uniformSize}
    >
      {/* SearchBar */}
      <SearchBar type="agents" />

      {/* Agent Info */}
      <CustomFlex
        direction={["column-reverse", "row"]}
        my={12}
        gap={4}
        w="inherit"
      >
        <CustomFlex
          direction="column"
          gap={[6, 4, 4, 12]}
          justify="start"
          align="start"
        >
          <CustomFlex direction="column" align="start" justify="start">
            <CustomHeader fontSize={["5xl", "2xl", "4xl", "5xl", "7xl", "8xl"]}>
              {data.name}
            </CustomHeader>
            <CustomText fontWeight={500}>
              {data.seniority} Property Agent | Golden Fields Realty
            </CustomText>
            <CustomText>{data.description}</CustomText>
          </CustomFlex>

          <CustomFlex direction="column" align="start" justify="start">
            <CustomText fontWeight={400}>Specialties:</CustomText>
            <CustomFlex direction="column" align="start" justify="start">
              {data.specialties.map((speciality, index) => (
                <CustomText key={index}>• {speciality}</CustomText>
              ))}
            </CustomFlex>
          </CustomFlex>

          <CustomFlex direction="column" align="start" justify="start">
            <CustomText fontWeight={400}>Languages:</CustomText>
            <CustomFlex direction="column" align="start" justify="start">
              {data.languages.map((language, index) => (
                <CustomText key={index}>• {language}</CustomText>
              ))}
            </CustomFlex>
          </CustomFlex>

          <CustomFlex direction="column" align="start" justify="start">
            <CustomText fontWeight={400}>Contact:</CustomText>
            <CustomText>Email: {data.email}</CustomText>
            <CustomText>Phone: {data.phone}</CustomText>
          </CustomFlex>

          <CustomFlex direction="column" align="start" justify="start">
            <CustomText fontWeight={400}>Status:</CustomText>
            <CustomText>
              {data.availability ? "Available" : "Not Available"}
            </CustomText>
          </CustomFlex>
        </CustomFlex>

        {/* Agent Image Profile */}
        <CustomFlex
          direction="column"
          gap={[4, 2, 2, 4]}
          align="start"
          justify="start"
          mb={[12, 0]}
        >
          <CustomFlex gap={2} align="start" justify="start">
            <CustomImage
              src={data.imageUrl[0]}
              alt={`Agent image ${data.name}`}
              h={["20em", "15em", "20em", "30em", "26em", "30em"]}
              objectFit="cover"
            />
          </CustomFlex>
          <CustomText>{data.about}</CustomText>
        </CustomFlex>
      </CustomFlex>
    </CustomFlex>
  );
};

export default AgentPage;
