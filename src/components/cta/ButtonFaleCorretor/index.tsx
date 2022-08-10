import { FC } from "react";
import styles from "./styles.module.scss";

export const ButtonFaleCorretor: FC = () => (
  <>
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.button}>
          <button className={styles.btn}>Fale com seu corretor</button>
        </div>
      </div>
    </div>
  </>
);
