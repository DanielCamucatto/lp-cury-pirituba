import { FC } from "react";
import styles from "./styles.module.scss";

interface CTASectionProps {
  onClick: (evt: string) => void;
}

export const CTASection: FC<CTASectionProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ctas}>
        <h1>
          Fale com um corretor <br />
          online sobre esse imóvel
        </h1>
        <span className={styles.separator}></span>
        <button
          type="button"
          name="chat"
          onClick={() => {
            onClick("chat");
          }}
        >
          iniciar chat
          <img src="/images/icon-white-chat.png" />
        </button>
        <button
          type="button"
          name="financy_simulator"
          onClick={() => {
            onClick("simulator");
          }}
        >
          simular financiamento
          <img src="/images/icon-white-calc.png" />
        </button>
      </div>
    </div>
  );
};
