import React from "react";
import ToastShelf from "../ToastShelf";
import ToastBuilder from "../ToastBuilder";
import ToastProvider from "../ToastProvider";
import styles from "./ToastPlayground.module.css";

const ToastPlayground = () => {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        <ToastShelf />
        <ToastBuilder />
      </div>
    </ToastProvider>
  );
};

export default ToastPlayground;
