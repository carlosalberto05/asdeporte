import React from "react";
import styles from "@/styles/FloatMenu.module.scss";

const FloatMenu = () => {
  return (
    <div className={styles.containerFloatMenu}>
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
