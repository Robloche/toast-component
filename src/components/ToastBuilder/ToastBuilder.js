import React from "react";
import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastBuilder.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const ToastBuilder = () => {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { pushToast } = React.useContext(ToastContext);

  const handleSubmitToast = React.useCallback((event) => {
    event.preventDefault();

    if (message !== "") {
      pushToast(message, variant);
      setMessage("");
      setVariant("notice");
    }
  }, [message, pushToast, variant]);

  return (
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
  );
};

export default ToastBuilder;
