import React from "react";
import styles from "@/styles/Galery.module.scss";

const Gelery = () => {
  return (
    <div className={styles.containerGalery}>
      <div className={styles.subContainer}>
        <img src="/assets/galery/im1.svg" alt="Bell" />
        <img src="/assets/galery/im2.svg" alt="Bell" />
        <img src="/assets/galery/im3.svg" alt="Bell" />
      </div>
      <div className={styles.subContainer}>
        <img src="/assets/galery/im4.svg" alt="Bell" />
        <img src="/assets/galery/im5.svg" alt="Bell" />
        <img src="/assets/galery/im6.svg" alt="Bell" />
      </div>
    </div>
  );
};

export default Gelery;
