import React, { useState } from "react";
import styles from "../styles/Subnavbar.module.scss";
import Modal from "./Modal";

const SubNavbar = () => {
  const [activeModal, setActiveModal] = useState(false);
  const images = [
    "/assets/subnavbar/gal1.jpg",
    "/assets/subnavbar/gal2.jpg",
    "/assets/subnavbar/gal3.jpg",
    "/assets/subnavbar/gal4.png",
    "/assets/subnavbar/gal5.jpg",
  ];

  const handleModal = () => {
    setActiveModal(true);
  };

  const handleClose = () => {
    setActiveModal(false);
  };

  return (
    <>
      {activeModal && <Modal setActiveModal={setActiveModal} />}
      <div className={styles.subnavbar}>
        <div className={styles.sublogo}>
          <img
            src="/assets/subnavbar/sublogo.svg"
            alt="Logo"
            className={styles.imageSublogo}
          />
          <img
            src="/assets/subnavbar/logoresponsive.svg"
            alt="Logo responsivo"
            className={styles.logoResponsive}
          />
        </div>
        <div className={styles.smallgalery}>
          <div className={styles.containergallery}>
            {images.map((image, index) => (
              <img
                onClick={handleModal}
                key={index}
                src={image}
                alt={`Imagen ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
