import { useEffect, useState } from "react";

function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth - document.body.clientWidth;
    setScrollbarWidth(width);
  }, []);

  return scrollbarWidth;
}

export default useScrollbarWidth;
