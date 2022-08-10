import { FC, useEffect } from "react";
import styles from "./styles.module.scss";

interface FloatCtaBarSectionProps {
  show?: boolean;
  onClick: (evt: string) => void;
}

export const FloatCtaBarSection: FC<FloatCtaBarSectionProps> = ({
  show,
  onClick,
}) => {
  useEffect(function () {}, [show]);

  const classes = [styles.container, show && styles.show].join(" ");

  return (
    <div className={classes}>
      <div>
        <button
          type="button"
          name="simulator"
          onClick={() => {
            onClick("simulator");
          }}
        >
          <img src="/images/icon-calc.png" alt="logo simulator" />
          <span> simulador </span>
        </button>

        <button
          type="button"
          className={styles.chatBtn}
          name="chat"
          onClick={() => {
            onClick("chat");
          }}
        >
          <img src="/images/icon-chat.png" alt="logo simulator" />
          <span> chat </span>
        </button>
      </div>
    </div>
  );
};

FloatCtaBarSection.defaultProps = {
  show: false,
};
