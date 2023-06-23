import React from "react";
import styles from "../styles/Subnavbar.module.scss";

const SubNavbar = () => {
  return (
    <div className={styles.subnavbar}>
      <div className={styles.sublogo}>
        <img src="/assets/subnavbar/sublogo.svg" alt="Logo" />
      </div>
      <div className={styles.smallgalery}>
        <img src="/assets/subnavbar/gal1.jpg" />
        <img src="/assets/subnavbar/gal2.jpg" />
        <img src="/assets/subnavbar/gal3.jpg" />
        <img src="/assets/subnavbar/gal4.png" />
        <img src="/assets/subnavbar/gal5.jpg" />
      </div>
    </div>
  );
};

export default SubNavbar;
