import { useState, useEffect } from "react";
import { AgentProps, PropertyProps } from "../../types/generalTypes";
import { useLoading } from "./PageUtils";
import { getAllAgents } from "../../service/agents";
import { getAllProperties } from "../../service/properties";

type DataProps = AgentProps | PropertyProps;

const useGallery = (type: "agents" | "properties") => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const [visibleDatas, setVisibleDatas] = useState(4);
  const { loading, setLoading, LoadingComponent } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data =
          type === "agents" ? await getAllAgents() : await getAllProperties();
        setDatas(data);
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
