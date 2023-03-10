import React from "react";
import useKeyUp from "../../hooks/use-key-up";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const clearToasts = React.useCallback(() => setToasts([]), []);

  useKeyUp("Escape", clearToasts);

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
