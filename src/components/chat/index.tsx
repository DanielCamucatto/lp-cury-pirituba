import { FC, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import validator from "validator";
import InputMask from "react-input-mask";

import styles from "./styles.module.scss";
import { Header } from "../header";
import swal from "sweetalert";
import { createAndPushGaEvent } from "../../models/ga/ga-event";

import { productId } from '../../config';

interface ChatProps {
  show: boolean;
  onFinish: () => void;
}

interface ChatRequest {
  product_id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  midia: string;
}

interface ChatResponse {
  id: string;
  msg: string;
  erro: string;
  emailResponsavel: string;
  idResponsavel: string;
  acao: string;
  ferramenta: string;
}

const endpointChat = "https://a.construtoracury.com.br/api/crm/distribuidor";

export const Chat: FC<ChatProps> = ({ show, onFinish }) => {
  const [section, setSection] = useState(0);
  const [btnContinueActive, setBtnContinueActive] = useState(true);

  const router = useRouter();


  const defaultChatData = {
    "type":"",
    "name":"",
    "email":"",
    "phone":"",
    "origin":"",
    "area":"",
    "zipcode":"",
    "maps_url":"",
    "owner":'',
    "product_id": productId,
    "product_name":"",
    "uf":"SP",
    "chat_url":""
  };

  const [dataSend, setDataSend] = useState(defaultChatData);
  const [chatUrl, setChatUrl] = useState<string>("");

  const generalInputEvent = function (evt: FormEvent<HTMLInputElement>): void {
    const t = evt.target as HTMLInputElement;

    setDataSend({
      ...dataSend,
      [t.name]: t.value,
    });
  };

  let continueCallback = () => {

    setSection( (section < 3) ? section + 1: section );

    if (chatUrl) {
      window.open(
        chatUrl,
        "new_windows",
        `width=${window.innerWidth},height=${window.innerHeight}`
      );
      onFinish();

      createAndPushGaEvent({'event': 'lead_gerado-LynePirituba_Chat'});

      router.push('#chat-obrigado');
    }
  };

  useEffect(() => {
    if (section === 1) {
      // validate e-mail
      const name = dataSend.name;

      if (
        validator.isEmpty(name, {
          ignore_whitespace: true,
        })
      ) {
        swal("Problema!", 'Por favor, preencha o campo "nome".', "warning");
        setSection(0);
      }
    }

    if (section === 2) {
      // validate e-mail
      const email = dataSend.email;

      if (!validator.isEmail(email)) {
        swal("Problema!", "Por favor, insira um e-mail válido.", "warning");
        setSection(1);
      }
    }

    if (section === 3) {
      const phone = dataSend.phone;

      if (validator.isEmpty(phone)) {
        swal(
          "Problema!",
          "Por favor, insira um número de telefone válido.",
          "warning"
        );
        setSection(2);
        return;
      }

      const url = [
        `https://curysp-distribuidor.hypnobox.com.br/acao/chat.php?`,
        `nome=${dataSend.name}`,
        `&email=${dataSend.email}`,
        `&telefone=${dataSend.phone}`,
        `&midia=LP Pirituba - Simulador de Financiamento`,
        `&codigo_interno=${productId}`,
        `&produto_codigo=${productId}`
      ];

      setChatUrl(encodeURI(url.join("")));
    }
  }, [section]);

  useEffect(() => {
    setDataSend(defaultChatData);
    setSection(0);
    setChatUrl("");
  }, [show]);

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
          Atendimento Virtual
          <hr />
        </h1>

        <div className={styles.sections}>
          <div
            id="section-1"
            className={section === 0 ? styles.sectionActive : ""}
          >
            <h2>Ola, tudo bem? Estou aqui para te ajudar. Como se chama?</h2>

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
            className={section === 1 ? styles.sectionActive : ""}
          >
            <h2>
              Muito prazer, {dataSend.name}! Poderia nos informar seu e-mail,
              por favor?
            </h2>
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
            className={section === 2 ? styles.sectionActive : ""}
          >
            <h2>
              Só mais uma coisinha... Qual o número do seu celular? Apenas para
              o caso de precisarmos detalhar no assunto.
            </h2>
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
            className={section === 3 ? styles.sectionActive : ""}
          >
            <h2>
              Um consultor dará continuidade a seu atendimento.
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
            id={"botao-final-fluxo-chat"}
            disabled={!btnContinueActive}
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};
