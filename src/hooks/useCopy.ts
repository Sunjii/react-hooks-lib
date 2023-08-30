import { useState } from "react";

type onCopyFn = (text: string) => Promise<boolean>;

export const useCopy = (): [boolean, onCopyFn] => {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);

      return true;
    } catch (err) {
      // console.log(err);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
};
