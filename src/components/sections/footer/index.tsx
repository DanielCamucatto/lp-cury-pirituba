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
        <span>Sides</span>
      </div>
      <div className={styles.boxTextLegal}>
        <span>CASA VIVA ILHÉUS EMPREENDIMENTOS IMOBILIÁRIOS LTDA. (CONDOMÍNIO RESIDENCIAL SILVER LYNE PIRITUBA ). Incorporação registrada em 06/07/2022, R.6 da matrícula 185.610 do 16º Oficial de Registro de Imóveis de São Paulo. Para mais informações, consulte a Central de Vendas da Cury ( Cnpj: 14.055.045/0001-78; CCISA 08 Consultoria Imobiliária Ltda. - Creci 23670-J). As imagens apresentadas nos desenhos, artes, perspectivas, anúncios ou qualquer outra forma de veiculação são meramente ilustrativas, bem como a reprodução da vegetação da maquete, representam artisticamente a fase adulta das espécies. O empreendimento será entregue com a vegetação implantada por meio de mudas conforme a especificação do projeto paisagístico. ¹Confira o memorial descritivo do cliente para mais informações. ²Unidades comercializadas via modalidade de venda direta, não serão contempladas nas condições comerciais ora divulgadas. ³O item Lavanderia poderá contar com prestação de serviço terceirizado e independente da incorporadora, sendo sua utilização mediante pagamento pelo condômino (pay-per-use). Consulte o corretor para saber as unidades exatas correspondentes aos valores e condições divulgadas. Válido até 31/08/2022 ou enquanto durarem os estoques. Sujeito à alteração sem aviso prévio. Impresso em 07/2022.</span>
      </div>
    </div>
  );
};
