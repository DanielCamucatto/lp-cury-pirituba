import { FC, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ImageSet {
  rule: string;
  src: string;
}

interface ImagesInfo {
  src: string;
  className?: string;
  legend?: string;
  set?: ImageSet[];
}

interface GalleryCarouselProps {
  id?: string;
  className: string;
  images: ImagesInfo[];
}

export const GalleryCarousel: FC<GalleryCarouselProps> = ({
  id,
  className,
  images,
}) => {
  const refGallery = useRef<HTMLDivElement>(null);

  useEffect(function () {
    import("bootstrap/js/dist/carousel").then((Module) => {
      const Carousel = Module.default;

      if (refGallery.current) {
        const carouselLazer = new Carousel(refGallery.current);
      }
    });
  });

  return (
    <div
      ref={refGallery}
      id={id || new Date().getTime() + ""}
      className={className}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((props, i) => {
          let sets = null;
          let srcs = null;

          if (props.set) {
            sets = props.set.map((set) => {
              if (set && set.rule) {
                return `${set.rule}`;
              }
            });

            srcs = props.set.map((set) => {
              if (set && set.src) {
                return `${set.src}`;
              }
            });
          }

          return (
            <div
              key={i}
              className={"carousel-item " + (i === 0 ? "active" : "")}
            >
              <img
                src={props.src}
                className={props.className}
                srcSet={srcs ? srcs.join(", ") : ""}
                sizes={sets ? sets.join(",") : ""}
              />
              {props.legend && (
                <span className={styles.legend}>{props.legend}</span>
              )}
            </div>
          );
        })}
      </div>

      <button
        className={[styles.button, "carousel-control-prev"].join(" ")}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={[styles.button, "carousel-control-next"].join(" ")}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
