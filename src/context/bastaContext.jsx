import React, { createContext, useState } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
    const [numPlayers, setNumPlayers] = React.useState(0);

  return(
    <BastaContext.Provider value={{ numPlayers, setNumPlayers }}>
      { children }
    </BastaContext.Provider>
  )
}