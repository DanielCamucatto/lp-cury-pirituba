import "../styles/globals.scss";
import { FC } from "react";

import { AppProps } from "next/app";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Green Lyne Pirituba - Lançamento</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="O Green Lyne Pirituba tem apartamentos de 2 dorms. com opção de terraço e lazer de clube. More em frente à estação da CPTM e com fácil acesso a diversos comércios e serviços."
        />
        <link
          rel="shortcut icon"
          href="/images/logo-lyne.png"
          type="image/x-icon"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TDH8XH4');`,
          }}
        />
      </Head>
      <Component {...pageProps} />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TDH8XH4"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default MyApp;
