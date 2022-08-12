import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "./../../image";

export const TrainStationSection: FC = () => (
  <>
    <div className={styles.container}>
      <div className={styles.title}>
        Em frente <br /> à estação pirituba CPTM
      </div>
    </div>

    <div className={styles.trainImage}>
      <img src="/images/v2/trem.png" alt=" Em frente á estação pirituba CPTM" />
    </div>

    <div className={styles.container}>
      <div className={styles.localDescription}>
        <p className={styles.desc}>
          NO SILVER LYNE PIRITUBA, A MENOR DISTÂNCIA ENTRE DOIS PONTOS É AQUELA
          QUE <strong>VOCÊ CHEGA MAIS RÁPIDO.</strong>
        </p>
      </div>

      <div className={styles.distances}>
        <ul>
          <li>
            <Image
              src="/images/v2/metro.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <strong>
                Em frente à <br /> estação Pirituba - CPTM
              </strong>
            </span>
          </li>

          <li>
            <Image
              src="/images/v2/sacola.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <i>700 m</i>
              <strong>shopping pirituba</strong>
            </span>
          </li>

          <li>
            <Image
              src="/images/v2/onibus.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <i>50 m</i>
              <strong>terminal pirituba</strong>
            </span>
          </li>

          <li>
            <Image
              src="/images/v2/arvore.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <i>4 minutos</i>
              <strong>parque são domingos</strong>
            </span>
          </li>

          <li>
            <Image
              src="/images/v2/marginal.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <i>9 minutos</i>
              <strong>Marginal Tietê</strong>
            </span>
          </li>

          <li>
            <Image
              src="/images/v2/carefour.png"
              width={40}
              height={40}
              layout="intrinsic"
            />
            <span>
              <i>3.7 KM</i>
              <strong>Do Tietê Plaza Shopping</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </>
);
