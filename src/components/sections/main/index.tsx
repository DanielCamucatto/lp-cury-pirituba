import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import Image from "./../../image";

interface MainProps {
  onScroll?: () => void;
}

export const MainSection: FC<MainProps> = ({ children }) => {
  const toDown = useCallback(function () {
    window.scrollTo({
      top: window.innerHeight,
    });
  }, []);

  return (
    <main className={styles.lMain}>
      {children}
      <div className={styles.mainContainer}>
        <div className={`container ${styles.container}`}>
          <div className={styles.mainInfos}>
            <div className={styles.mainInfos__logo}>
              <Image
                src="/images/logo-lyne.png"
                width={191}
                height={191}
                alt="Logo blue line - pirituba."
                layout="intrinsic"
              />

              {/*
 <div className={styles.mainInfos__logo_text}>
                <span className={styles.mainInfos__logo_text_name}>
                  Green Lyne Pirituba.
                </span>
                <span className={styles.mainInfos__logo_text_desc}>
                  A menor distância entre você e a sua nova vida.
                </span>
              </div>
 */}
            </div>

            <div className={styles.mainInfos__dormitorios}>
              <span className={styles.mainInfos__dormitorios_qtd}>2</span>
              <span className={styles.mainInfos__dormitorios_qtd_desc}>
                Dorms,
              </span>
            </div>

            <div className={styles.mainInfos__descricao}>
              <p>com e sem terraço, lazer de clube</p>
              <span className={styles.mainInfos__descricao_item}>
                itens compartilhados
              </span>
            </div>
          </div>

          {/* <div className={styles.lineRight}>
        <img src="/images/bar-left-decorator.png" />
      </div>*/}
        </div>
        <div className={styles.lineLeft}>
          <img src="/images/bar-left-decorator.png" />
        </div>
        <div className={styles.containerButtonScroll} onClick={toDown}>
          <img src="/images/ceta-to-down.png" />
        </div>
      </div>
    </main>
  );
};
