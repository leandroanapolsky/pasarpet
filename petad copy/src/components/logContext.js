import { createContext, useState } from "react";

export const logContext = createContext();

export default function LogContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);



  const logUser = () => {
    setLoggedIn(!loggedIn);
  };

  const logUserOut = () => {
    console.log("user logged out");
    setLoggedIn(false);
  };

  
  

  return (
    <logContext.Provider value={{ loggedIn, logUser, logUserOut}}>
      {children}
    </logContext.Provider>
  );
}
