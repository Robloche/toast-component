import styles from "./ToastPlayground.module.css";
import Button from "../Button";
import React from "react";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const ToastPlayground = () => {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  const handleSubmitToast = React.useCallback((event) => {
    event.preventDefault();

    if (message !== "") {
      setToasts((currentToasts) => [...currentToasts, { id: Math.random().toString(), message, variant }]);
      setMessage("");
      setVariant("notice");
    }
  }, [message, variant]);

  const handleCloseToast = React.useCallback((toDeleteId) => {
    setToasts([...toasts.filter(({ id }) => id !== toDeleteId)]);
  }, [toasts]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf handleCloseToast={handleCloseToast} toasts={toasts} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmitToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea className={styles.messageInput}
                      id="message"
                      onChange={(event) => setMessage(event.target.value)}
                      value={message} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variantName) => {
              const id = `variant-${variantName}`;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    checked={variantName === variant}
                    id={id}
                    name="variant"
                    onChange={() => setVariant(variantName)}
                    type="radio"
                    value={variantName}
                  />
                  {variantName}
                </label>
              );
            })}
          </div>
        </div>

        <div className="{styles.row}">
          <div className="{styles.label}" />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ToastPlayground;
