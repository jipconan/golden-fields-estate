import { useState, useEffect } from "react";
import { AgentProps, PropertyProps } from "../../types/generalTypes";
import { useLoading } from "./PageUtils";
import { getAllAgents, getAgentsByCategory } from "../../service/agents";
import {
  getAllProperties,
  getPropertiesByCategory,
} from "../../service/properties";

type DataProps = AgentProps | PropertyProps;

const useGallery = (type: "agents" | "properties", searchParams: string) => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const [visibleDatas, setVisibleDatas] = useState(4);
  const { loading, setLoading, LoadingComponent } = useLoading();

  async function fetchDatas() {
    try {
      // console.log("searchParams", searchParams);
      if (searchParams) {
        const data =
          type === "agents"
            ? await getAgentsByCategory(searchParams.toString())
            : await getPropertiesByCategory(searchParams.toString());
        setDatas(data);
        // console.log("searchParams + data", data);
      } else {
        const data =
          type === "agents" ? await getAllAgents() : await getAllProperties();
        setDatas(data);
        // console.log("data", data);
      }
    } catch (error) {
      console.error("Error fetching datas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDatas();
  }, [type]);

  const currentDatas = datas.slice(0, visibleDatas);

  const handleViewMore = () => {
    setVisibleDatas((prevVisibleDatas) =>
      Math.min(prevVisibleDatas + 4, datas.length)
    );
  };

  return {
    datas,
    currentDatas,
    visibleDatas,
    handleViewMore,
    loading,
    LoadingComponent,
  };
};

export { useGallery };
