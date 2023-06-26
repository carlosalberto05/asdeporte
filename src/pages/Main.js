import React, { useContext } from "react";
// import styles from "@/styles/Home.module.scss";
import SubNavbar from "@/components/SubNavbar";
import Gelery from "@/components/Gelery";
import FloatMenu from "@/components/FloatMenu";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";
import { SectionOne } from "@/components/SectionOne";

export default function Main() {
  return (
    <ModalProvider>
      <SubNavbar />
      <SectionOne />
      <FloatMenu />
      <Gelery />
      <Footer />
    </ModalProvider>
  );
}
