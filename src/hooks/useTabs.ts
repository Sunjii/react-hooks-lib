import { useState } from "react";

export const useTabs = (initailTab: number, allTabs: any) => {
  const [currentIndex, setCurrentIndex] = useState(initailTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
