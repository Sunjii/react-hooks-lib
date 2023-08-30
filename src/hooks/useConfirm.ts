export const useConfirm = (
  message: string,
  onConfirm: Function,
  onCancle?: Function
) => {
  //   if (typeof onConfirm !== "function") {
  //     return;
  //   }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      if (onCancle) {
        onCancle();
      }
    }
  };

  return confirmAction;
};
