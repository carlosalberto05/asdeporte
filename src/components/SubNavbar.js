import React, { useContext } from "react";
import styles from "../styles/Subnavbar.module.scss";
import Modal from "./Modal";
import { ModalContext } from "@/components/ModalContext";
import { images } from "@/utils/imgSubnav";

const SubNavbar = () => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  // const opacityClass = isModalActive ? styles.modalActive : "";

  const handleModal = () => {
    setIsModalActive(true);
  };

  return (
    <>
      {isModalActive && <Modal />}
      {/* <div className={`${styles.subnavbar} ${opacityClass}`}></div> */}
      <div className={`${styles.subnavbar}`}>
        {isModalActive && <div className={styles.overlay} />}{" "}
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
