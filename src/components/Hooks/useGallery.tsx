import { useState, useEffect } from "react";
import { AgentProps, PropertyProps } from "../../types/generalTypes";
import { useLoading } from "./PageUtils";
import { getAllAgents } from "../../service/agents";
import { getAllProperties } from "../../service/properties";

type DataProps = AgentProps | PropertyProps;

const useGallery = (type: string) => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const [visibleDatas, setVisibleDatas] = useState(4);
  const { loading, setLoading, LoadingComponent } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (type === "agents") {
          const data: AgentProps[] = await getAllAgents();
          setDatas(data);
        } else if (type === "properties") {
          const data: PropertyProps[] = await getAllProperties();
          setDatas(data);
        }
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentDatas = datas.slice(0, visibleDatas);

  const handleViewMore = () => {
    setVisibleDatas((prevVisibleDatas) => prevVisibleDatas + 4);
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
