import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';

import swal from "sweetalert";
import validator from "validator";
import InputMask from "react-input-mask";

import styles from "./styles.module.scss";
import { Header } from "./../header";
import { createAndPushGaEvent } from "../../models/ga/ga-event";

import { productId } from './../../config';

interface SimulatorProps {
  show: boolean;
  onFinish: () => void;
}

interface SendSimulator {
  product_id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  midia: string;
}

interface ResponseSimulator {
  id: string;
  msg: string;
  erro: string;
  emailResponsavel: string;
  idResponsavel: string;
  acao: string;
  ferramenta: string;
}

const endpointSimulator =
  "https://a.construtoracury.com.br/api/crm/distribuidor";

export const Simulator: FC<SimulatorProps> = ({ show, onFinish }) => {
  const inputCell = useRef<HTMLInputElement>();

  const [section, setSection] = useState(1);
  const [btnContinueActive, setBtnContinueActive] = useState(true);
  const router = useRouter();

  const defaultSimulatorData = {
    chat_url: '',
    email: '',
    fgts: '',
    name: '',
    phone: '',
    product_id: productId,
    region: '',
    start_budget: true,
    type: "simulator",
    uf: "SP",
  };

  const [dataSend, setDataSend] = useState(defaultSimulatorData);
  const [chatUrl, setChatUrl] = useState<string>("");

  const generalInputEvent = function (evt: FormEvent<HTMLInputElement>): void {
    const t = evt.target as HTMLInputElement;

    setDataSend({
      ...dataSend,
      [t.name]: t.value,
    });
  };

  let continueCallback = () => {

  
    const sec = (section < 4) ? section + 1: section;
    setSection( sec );

    if (chatUrl) {
      window.open(
        chatUrl,
        "new_windows",
        `width=${window.innerWidth},height=${window.innerHeight}`
      );
      onFinish();

      createAndPushGaEvent({'event': 'lead_gerado-LynePirituba_Simulador'});
      
      router.push('#simulador-obrigado');
    }
  };

  useEffect(() => {
    if (section === 2) {
      // validate e-mail
      const name = dataSend.name;

      if (
        validator.isEmpty(name, {
          ignore_whitespace: true,
        })
      ) {
        swal("Problema!", 'Por favor, preencha o campo "nome".', "warning");
        setSection(1);
      }
    }

    if (section === 3) {
      // validate e-mail
      const email = dataSend.email;

      if (!validator.isEmail(email)) {
        swal("Problema!", "Por favor, insira um e-mail válido.", "warning");
        setSection(2);
      }
    }

    if (section === 4) {
      const phone = dataSend.phone;

      if (validator.isEmpty(phone)) {
        swal(
          "Problema!",
          "Por favor, insira um número de telefone válido.",
          "warning"
        );
        setSection(3);
        return;
      }

      const url = [
        `https://curysp-distribuidor.hypnobox.com.br/acao/chat.php?`,
        `nome=${dataSend.name}`,
        `&email=${dataSend.email}`,
        `&telefone=${dataSend.phone}`,
        `&midia=LP Pirituba - Chat`,
        `&codigo_interno=${productId}`,
        `&produto_codigo=${productId}`
      ];

      setChatUrl(encodeURI(url.join("")));
    }
  }, [section]);

  useEffect(() => {
    setDataSend(defaultSimulatorData);
    setSection(1);
    setChatUrl("");
  }, [show]);

  useEffect(function () {}, [inputCell]);

  return (
    <>
      <div className={styles.container} data-show={show}>
        <div
          className={styles.buttonClose}
          onClick={() => {
            onFinish();
          }}
        >
          X
        </div>

        <Header bgColor={true} />

        <h1>
          Simulador de Financiamento
          <hr />
        </h1>

        <div className={styles.sections}>
          <div
            id="section-2"
            className={section === 1 ? styles.sectionActive : ""}
          >
            <h2>Qual o seu nome?</h2>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onInput={generalInputEvent}
              required={true}
              maxLength={50}
            />
          </div>

          <div
            id="section-3"
            className={section === 2 ? styles.sectionActive : ""}
          >
            <h2>Qual o seu melhor e-mail?</h2>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onInput={generalInputEvent}
              required={true}
            />
          </div>

          <div
            id="section-4"
            className={section === 3 ? styles.sectionActive : ""}
          >
            <h2>Qual o seu telefone com DDD?</h2>
            <InputMask
              mask={"99 9 9999-9999"}
              type="text"
              name="phone"
              placeholder="Telefone"
              onInput={generalInputEvent}
              required={true}
            />
          </div>

          <div
            id="section-6"
            className={section === 4 ? styles.sectionActive : ""}
          >
            <h2>
              Um consultor dará continuidade a sua simulação.
              <br />
              <br />
              clique no botão abaixo para continuar.
            </h2>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.buttonContinue}
            onClick={continueCallback}
            disabled={!btnContinueActive}
            id={`botao-final-fluxo-simulador-${section}`}
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};
