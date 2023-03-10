import styles from "./ToastPlayground.module.css";
import Button from "../Button";
import React from "react";
import Toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  const handleCloseToast = React.useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const handleOpenToast = React.useCallback(() => {
    setIsToastOpen(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastOpen && <Toast handleClose={handleCloseToast} message={message} variant={variant} />}

      <div className={styles.controlsWrapper}>
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
            <Button onClick={handleOpenToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
