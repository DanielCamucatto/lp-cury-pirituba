import styles from "./header.module.scss";
import Image from "./../image";

interface IHeader {
  bgColor?: boolean;
}

export const Header = ({ bgColor }: IHeader) => {
  return (
    <div
      className={
        bgColor ? `${styles.lHeader} ${styles.lHeaderModal}` : styles.lHeader
      }
    >
      <div className={styles.lHeader__logo}>
        <div className={styles.lHeader__logo_item}>
          <Image
            src="/images/logo-cury-azul.svg"
            // width={239}
            // height={48}
            alt="Logo Cury"
            layout="responsive"
          />
        </div>
        <div className={styles.lHeader__logo_item__casa_viva}>
          <Image
            src="/images/v2/logo_casa-viva.png"
            width={168}
            height={56}
            alt="Logo Casa Viva"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
