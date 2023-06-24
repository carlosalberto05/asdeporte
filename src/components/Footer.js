import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>SOCIOS COMERCIALES</p>
      <div className={styles.div__container}>
        <div className={styles.container__image}>
          <img src="/assets/footer/epura.svg" alt="epura" />
        </div>
        <div className={styles.container__image}>
          <img src="/assets/footer/aeromexico.svg" alt="aeromexico" />
        </div>
        <div className={styles.container__image}>
          <img src="/assets/footer/santander.svg" alt="santander" />
        </div>
        <div className={styles.container__image}>
          <img src="/assets/footer/G.svg" alt="G" />
        </div>
        <div className={styles.container__image}>
          <img src="/assets/footer/gmc.svg" alt="gmc" />
        </div>
        <div className={styles.container__image}>
          <img src="/assets/footer/innovasport.svg" alt="innovasport" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
