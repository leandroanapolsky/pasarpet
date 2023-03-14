import { createContext, useState } from "react";

export const petsContext = createContext();

export default function PetsContextProvider({ children }) {
  const [modalShow, setModalShow] = useState(true);

  const showLogin = () => {
    setModalShow(!modalShow);
  };

  
  
  return (
    <petsContext.Provider value={{ modalShow, showLogin }}>
      {children}
    </petsContext.Provider>
  );
}
