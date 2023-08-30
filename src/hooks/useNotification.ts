import { useEffect } from "react";

export const useNotification = (title: string, options?: any) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNoti;
};
