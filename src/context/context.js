import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem ] = useState('')

  return (
    <MyContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        selectedItem,
        setSelectedItem
      }}
    >
      {children}
    </MyContext.Provider>
  );
}