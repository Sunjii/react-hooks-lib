import { useEffect } from "react";

export const useBeforeLeave = (onBeforeFn: any) => {
  const handle = (event: MouseEvent) => {
    const { clientY } = event;

    if (clientY <= 0) {
      onBeforeFn();
    }

    // onBeforeFn();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
