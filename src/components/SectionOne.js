import React, { useContext } from "react";
import styles from "@/styles/Home.module.scss";
import { ModalContext } from "@/components/ModalContext";

export const SectionOne = () => {
  const { isModalActive } = useContext(ModalContext);
  const opacityClass = isModalActive ? styles.modalActive : "";
  return (
    <div className={`${styles.sectionOne} ${opacityClass}`}>
      <p className={styles.space}>
        <span>L ´Etape México</span> te lleva a vivir la mejor experiencia del
        Tour de France con el serial de eventos de ciclismo amateur más
        importante en México.
      </p>
      <p>
        Se parte de esta experiencia y rueda en las mejores rutas de México
        diseñadas por expertos del TDF.
      </p>
    </div>
  );
};
