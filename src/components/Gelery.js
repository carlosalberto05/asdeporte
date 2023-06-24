import React from "react";
import styles from "@/styles/Galery.module.scss";
import im1 from "../../public/assets/galery/im1.jpg";

const Gelery = () => {
  return (
    <div className={styles.containerGalery}>
      <img src={im1} alt="Bell" />
      {/* <img src="/assets/navbar/Bell.svg" alt="Bell" /> */}
    </div>
  );
};

export default Gelery;
