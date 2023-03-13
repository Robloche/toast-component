import React, { useEffect } from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  useEffect(() => {
    const handleKeyUp = (event) => {
      const { key } = event;

      if (key === "Escape") {
        event.preventDefault();
        setToasts([]);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const pushToast = React.useCallback((message, variant) => {
    if (message !== "") {
      setToasts((currentToasts) => [...currentToasts, { id: Math.random().toString(), message, variant }]);
    }
  }, []);

  const closeToast = React.useCallback((toDeleteId) => {
    setToasts((currentToasts) => [...currentToasts.filter(({ id }) => id !== toDeleteId)]);
  }, []);

  return (
    <ToastContext.Provider value={{ closeToast, pushToast, toasts }}>
      {children}
    </ToastContext.Provider>);
};

export default ToastProvider;
