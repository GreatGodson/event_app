// import { createContext, useContext } from "react";

// export const UserContext = createContext(false); 

// export function useUserContext(){
//     const user = useContext(UserContext);

//     if(user === undefined){
//         throw new Error('useUserContext must be init with a UserContext')
//     }

//     return user;
// }



import React, { createContext, useState } from 'react';

export const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
