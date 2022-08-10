import { FC } from "react";
import styles from "./styles.module.scss";

export const LocalizationSection: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Fácil acesso a tudo que você precisa</span>
        <h1>Localização</h1>
      </div>

      <div className={styles.description}>
        Pirituba, localizado na Zona Norte, é um dos bairros mais verdes de São
        Paulo. Além de contar com uma ampla rede de serviços ao redor do Silver
        Lyne Pirituba, você estará em frente à Estação Pirituba da CPTM e a 50
        metros do Terminal. É facilidade, mobilidade e lazer para você e toda
        família!
      </div>

      <div className={styles.separator}></div>

      <div className={styles.address}>
        <h2>Stand de vendas</h2>
        <address>
          <span>Avenida Paula Ferreira, 3.750</span>
          <span>Pirituba</span>
        </address>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2295387178474!2d-46.72765934905879!3d-23.488240384644225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9142552ca7d%3A0x15ed803028983ba9!2sAv.%20Paula%20Ferreira%2C%203750%20-%20Vila%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002915-100!5e0!3m2!1spt-BR!2sbr!4v1610997205248!5m2!1spt-BR!2sbr"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};
