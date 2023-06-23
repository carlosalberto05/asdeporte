import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/navbar/Logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/competencias">Competencias</Link>
          </li>
          <li>
            <Link href="/mi-tribu">Mi Tribu</Link>
          </li>
          <li>
            <Link href="/nutricion">Nutrición</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/planes">Planes</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className={styles.containerIcons}></div>
      <div className={styles.icons}>
        <img src="/assets/navbar/Search.svg" alt="Search" />
        <img src="/assets/navbar/Cart-add.svg" alt="Cart" />
        <img src="/assets/navbar/Bell.svg" alt="Bell" />
      </div>
      <div className={styles.containerAvatar}>
        <img src="/assets/navbar/Avatar Plus Large.svg" alt="Avatar" />
        <p>Mi cuenta</p>
      </div>
    </nav>
  );
};

export default Navbar;
