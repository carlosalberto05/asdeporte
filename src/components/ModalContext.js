import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalActive, setIsModalActive }}>
      {children}
    </ModalContext.Provider>
  );
};
