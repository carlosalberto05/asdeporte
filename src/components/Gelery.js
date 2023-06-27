import React, { useContext } from "react";
import styles from "@/styles/Galery.module.scss";
import { ModalContext } from "@/components/ModalContext";
import { information } from "@/utils/imgGalery";

const Gelery = () => {
  const { isModalActive } = useContext(ModalContext);
  // const opacityClass = isModalActive ? styles.modalActive : "";

  return (
    <>
      <div className={`${styles.containerGalery}`}>
        {isModalActive && <div className={styles.overlay} />}{" "}
        <div className={styles.subContainer}>
          <img src="/assets/galery/im1.svg" alt="Imagen 1" />
          <img src="/assets/galery/im2.svg" alt="Imagen 2" />
          <img src="/assets/galery/im3.svg" alt="Imagen 3" />
        </div>
        <div className={styles.subContainer}>
          <img src="/assets/galery/im4.svg" alt="Imagen 4" />
          <img src="/assets/galery/im5.svg" alt="Imagen 5" />
          <img src="/assets/galery/im6.svg" alt="Imagen 6" />
        </div>
      </div>

      <div className={`${styles.containerGaleryResponsive}`}>
        {isModalActive && <div className={styles.overlay} />}{" "}
        {information.map((info) => (
          <div className={styles.containerCard} key={info.id}>
            <img src={info.image} />
            <div className={styles.containerText}>
              <p className={styles.title}>{info.title}</p>
              <p className={styles.text}>{info.city}</p>
              <p className={styles.text}>{info.date}</p>
              <p className={styles.text}>
                <span>Desde: {info.princeMin}</span>
                <span style={{ marginLeft: "10px" }}>
                  Plus:{info.pricePlus}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gelery;
