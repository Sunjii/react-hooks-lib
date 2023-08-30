import { useEffect, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScrollHandler = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return state;
};
