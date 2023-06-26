import React, { useContext } from "react";
import styles from "@/styles/FloatMenu.module.scss";
import { ModalContext } from "@/components/ModalContext";

const FloatMenu = () => {
  const { isModalActive } = useContext(ModalContext);
  const opacityClass = isModalActive ? styles.modalActive : "";
  return (
    <div className={`${styles.containerFloatMenu} ${opacityClass}`}>
      <ul>
        <li>Próximos eventos</li>
        <li>Paquetes</li>
        <li>Eventos pasados</li>
        <li>Tribus destacadas</li>
      </ul>
    </div>
  );
};

export default FloatMenu;
