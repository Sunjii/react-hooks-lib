import { useEffect, useRef } from "react";

export const useClick = (onClick: Function) => {
  const element = useRef<any>(null);

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return typeof onClick !== "function" ? undefined : element;
};
