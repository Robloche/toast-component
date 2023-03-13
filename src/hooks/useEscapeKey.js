import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleKeyUp = (event) => {
      const { code } = event;

      if (code === "Escape") {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [callback]);
};

export default useEscapeKey;
