import { FC, useCallback, useState } from "react";
import { GalleryCarousel } from "../../gallery-carousel";
import styles from "./styles.module.scss";

interface ImageSet {
  rule: "string";
  src: "string";
}

interface Image {
  src: string;
  set?: ImageSet[];
}

export type GallerySectionImage = Image;

interface Gallery {
  id: string;
  label: string;
  images: string[];
}

interface GallerySectionProps {
  galleries: Gallery[];
}

export const GallerySection: FC<GallerySectionProps> = ({ galleries }) => {
  const [galleryActive, setGalleryActive] = useState(() => {
    if (galleries.length > 0) {
      return galleries[0].id;
    }

    return "";
  });

  const classActive = useCallback(
    (id) => {
      return id === galleryActive ? "active" : "inactive";
    },
    [galleryActive]
  );

  return (
    <div className={styles.container}>
      {/*   <div className={styles.title}>
        <span>Mobilidade também no condomínio</span>
      </div>

      <div className={styles.separator}></div>
*/}
      <div className={styles.containerRoot}>
        <div className={styles.containerGalleries}>
          {/* <nav className={styles.navGallery}>
            <ul>
              {galleries.map((gallery) => (
                <li
                  key={gallery.id + 1}
                  className={[classActive(gallery.id)].join(" ")}
                  id="list-item"
                >
                  <a
                    href={`#${gallery.id}`}
                    onClick={(evt) => {
                      evt.preventDefault();
                      setGalleryActive(gallery.id);
                    }}
                  >
                    {gallery.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav> */}

          <div className={styles.galleries}>
            {galleries.map((gallery) => (
              <div
                key={gallery.id + 1}
                className={[styles.gallery].join(" ")}
                data-status={classActive(gallery.id)}
              >
                <GalleryCarousel
                  id={gallery.id}
                  className={"carousel slide"}
                  images={gallery.images.map((image) => ({ src: image }))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
