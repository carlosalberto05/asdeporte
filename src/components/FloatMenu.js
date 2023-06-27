import React, { useContext } from "react";
import Link from "next/link";
import styles from "@/styles/FloatMenu.module.scss";
import { ModalContext } from "@/components/ModalContext";

const FloatMenu = () => {
  const { isModalActive } = useContext(ModalContext);
  // const opacityClass = isModalActive ? styles.modalActive : "";
  return (
    <div className={`${styles.containerFloatMenu}`}>
      {isModalActive && <div className={styles.overlay} />}{" "}
      <ul>
        <li>
          <Link href="/proximos-eventos"> Próximos eventos</Link>
        </li>
        <li>
          <Link href="/paquetes"> Paquetes</Link>
        </li>
        <li>
          <Link href="/eventos-pasados">Eventos pasados</Link>
        </li>
        <li>
          <Link href="/tribus-destacadas">Tribus destacadas</Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatMenu;
