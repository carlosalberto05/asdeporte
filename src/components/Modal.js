import React from "react";
import styles from "../styles/Modal.module.scss";

const Modal = ({ setActiveModal }) => {
  const images = [
    "/assets/subnavbar/gal1.jpg",
    "/assets/subnavbar/gal2.jpg",
    "/assets/subnavbar/gal3.jpg",
    "/assets/subnavbar/gal4.png",
    "/assets/subnavbar/gal5.jpg",
  ];

  return (
    <div className={styles.containerModal}>
      <div className={styles.content}>
        <button onClick={() => setActiveModal(false)} className={styles.close}>
          X
        </button>
        <img src="/assets/modal/modalIm1.svg" alt="Imagen1" />
      </div>

      <div className={styles.smallgalery}>
        <div className={styles.containergallery}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
