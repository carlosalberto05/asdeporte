import React from "react";
import styles from "@/styles/Galery.module.scss";

const Gelery = () => {
  const information = [
    {
      id: "e001",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
    {
      id: "e002",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
    {
      id: "e003",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
    {
      id: "e004",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
    {
      id: "e005",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
    {
      id: "e006",
      image: "/assets/galery/etape.svg",
      title: "L´ETAPE by Tour de France",
      city: "CDMX",
      date: "4 septiembre 2022",
      princeMin: "$680",
      pricePlus: "$580",
    },
  ];
  return (
    <>
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

      <div className={styles.containerGaleryResponsive}>
        {information.map((info) => (
          <div className={styles.containerCard} key={info.id}>
            <img src={info.image} />
            <div className={styles.containerText}>
              <p className={styles.title}>{info.title}</p>
              <p className={styles.text}>{info.city}</p>
              <p className={styles.text}>{info.date}</p>
              <p className={styles.text}>
                <span>Desde: {info.princeMin}</span>
                <span style={{ marginLeft: "10px" }}>
                  Plus:{info.pricePlus}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gelery;
