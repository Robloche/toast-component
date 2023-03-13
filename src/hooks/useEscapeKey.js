import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleKeyUp = (event) => {
      const { key } = event;

      if (key === "Escape") {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [callback]);
};

export default useEscapeKey;
