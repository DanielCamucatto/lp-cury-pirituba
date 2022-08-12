import { FC } from "react";

import styles from "./styles.module.scss";

export const FooterSection: FC = () => {
  return (
    <div className={styles.container}>
      <a href="">Leia Informações Legais {">"}</a>

      <a href="">Política de privacidade</a>

      {/* *<div>
        RI.04 da matrícula 185.607 do 16º OFICIAL DE REGISTRO DE IMÓVEIS DE SP.
      </div>*/}

      <div id="copyright">
        <span className={styles.copytxt}>
          &copy; 2020 Copyright - Todos os direitos reservados Cury Construtora
        </span>
      </div>

      <div id="developby">
        <span>Desenvolvido por</span> <br />
        <span>SIDES</span>
      </div>
      <div className={styles.boxTextLegal}>
        <span>Casa Viva Ilhéus Empreendimentos Imobiliários LTDA. (Condomínio Residencial Silver Lyne Pirituba).
        </span><br></br>
        <span>Incorporação registrada em 06/07/2022, R.6 da matrícula 185.610 do 16º Oficial de Registro de Imóveis de São Paulo. </span> <br />
        <span> Responsável técnico: Ronaldo Cury de Capuá.</span>
      </div>
    </div>
  );
};
