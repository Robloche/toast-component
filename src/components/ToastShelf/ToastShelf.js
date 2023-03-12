import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

const ToastShelf = ({ handleCloseToast, toasts }) => {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast handleClose={() => handleCloseToast(id)} variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
};

export default ToastShelf;
