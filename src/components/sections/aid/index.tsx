import { relative } from "path";
import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "./../../image";

export const AidSection: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxDescription}>
        <ul>
          <li>
            <Image
              src="/images/icon-correct.png"
              width={67}
              height={67}
              layout="intrinsic"
            />
            <span>Subsídios de até 29mil"</span>
          </li>
          <li>
            <Image
              src="/images/icon-money.png"
              width={77}
              height={71}
              layout="intrinsic"
            />
            <span>Use seu FGTS na entrada</span>
          </li>
          <li>
            <Image
              src="/images/icon-papper.png"
              width={66}
              height={72}
              layout="intrinsic"
            />
            <span>Escritura + ITBI Grátis *</span>
          </li>
          <li className={styles.logoCasaVerdeAmarela}>
            <Image
              src="/images/logo-casa-va.png"
              width={70}
              height={70}
              layout="intrinsic"
            />
            <span>Programa Casa Verde e Amarela</span>
          </li>
        </ul>
      </div>
      {/* <Image
        src="/images/logo-casa-va.png"
        width={100}
        height={89}
        layout="intrinsic"
        className={styles.people}
      />
      <div className={styles.income}>
        <span>Programa Minha Casa Verde e Amarela</span>
      </div> */}
      <div className={styles.line}></div>
      <div className={styles.phrase}>
        A melhor maneira de sair do aluguel e realizar seu sonho
      </div>
      <small className={styles.condicoes}>* Consulte condições</small>
    </div>
  );
};
