import { useEffect, useState, FC } from "react";
import { GetStaticProps } from "next";
import path from "path";

import { imagesFromFolder } from "./../libs/folder-images";
import { config } from "../config";
import { Header } from "./../components/header";

/* sections */
import { MainSection } from "./../components/sections/main";
// import { LogoSection } from "./../components/sections/logo";
import { TrainStationSection } from "./../components/sections/train-station";
import {
  GallerySection,
  GallerySectionImage,
} from "./../components/sections/gallery";
import { LocalizationSection } from "./../components/sections/localization";
import { AidSection } from "./../components/sections/aid";
import { CTASection } from "../components/sections/cta";
import { FooterSection } from "../components/sections/footer";
import { FloatCtaBarSection } from "../components/sections/float-cta-bar";
import { ButtonFaleCorretor } from "../components/cta/ButtonFaleCorretor";
import { Simulator } from "../components/simulator";
import { Chat } from "../components/chat";

interface Gallery {
  id: string;
  label: string;
  images: string[];
}

interface HomeProps {
  galleries: Gallery[];
}

const Home: FC<HomeProps> = ({ galleries }) => {
  const [showCtaBar, setShowCtaBar] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(function () {
    const windowHeight = window.innerHeight - 100;
    window.addEventListener("scroll", function (evt) {
      if (this.scrollY > windowHeight) {
        // show fixedCtaBar
        setShowCtaBar(true);
      } else {
        setShowCtaBar(false);
      }
    });
  }, []);

  const ctaEventHandle = (evt: string) => {
    if (evt === "chat") {
      setShowChat(true);
    } else if (evt === "simulator") {
      setShowSimulator(true);
    }
  };

  return (
    <>
      <Simulator
        show={showSimulator}
        onFinish={() => setShowSimulator(false)}
      />

      <Chat show={showChat} onFinish={() => setShowChat(false)} />

      <MainSection>
        <Header />
      </MainSection>

      {/* <LogoSection /> */}
      <ButtonFaleCorretor />
      {<GallerySection galleries={galleries} />}

      <TrainStationSection />
      <LocalizationSection />
      <AidSection />
      <CTASection onClick={ctaEventHandle} />
      <FooterSection />

      <FloatCtaBarSection show={showCtaBar} onClick={ctaEventHandle} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const galleries: Gallery[] = [];

    const pathImagesPerspectivas = path.join(config.pathImages, "galerias", "PERSPECTIVA");
    const pathImagesPlantas = path.join(config.pathImages, "galerias", "PLANTAS");
    const pathImagesDecorado1 = path.join(config.pathImages, "galerias", "DECORADO_1");
    const pathImagesDecorado2 = path.join(config.pathImages, "galerias", "DECORADO_2");

    const imagesPerspectivas = await imagesFromFolder({ path: pathImagesPerspectivas });
    const imagesPlantas = await imagesFromFolder({ path: pathImagesPlantas });

    const imagesDecorado1 = await imagesFromFolder({ path: pathImagesDecorado1 });
    const imagesDecorado2 = await imagesFromFolder({ path: pathImagesDecorado2 });

    if (imagesDecorado1.length > 0) {
      galleries.push({
        id: "decorados-1",
        label: "Decorados 1",
        images: imagesDecorado1.map(image => path.join(
          config.absolutePathImages,
          "galerias",
          "DECORADO_1",
          image.file
        ))
      });
    }

    if (imagesDecorado1.length > 0) {
      galleries.push({
        id: "decorados-2",
        label: "Decorados 2",
        images: imagesDecorado1.map(image => path.join(
          config.absolutePathImages,
          "galerias",
          "DECORADO_2",
          image.file
        ))
      });
    }

    if (imagesPerspectivas.length > 0) {
      galleries.push({
        id: "perspectivas",
        label: "Perspectivas",
        images: imagesPerspectivas.map((image) =>
          path.join(
            config.absolutePathImages,
            "galerias",
            "PERSPECTIVA",
            image.file
          )
        ),
      });
    }

    if (imagesPlantas.length > 0) {
      galleries.push({
        id: "plantas",
        label: "Plantas",
        images: imagesPlantas.map((image) =>
          path.join(
            config.absolutePathImages,
            "galerias",
            "PLANTAS",
            image.file
          )
        ),
      });
    }



    return {
      props: {
        galleries,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        errorsRender: {},
        galleries: [],
      },
    };
  }
};

export default Home;
