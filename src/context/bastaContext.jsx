import React, { createContext, useState } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
    const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
    const [numPlayers, setNumPlayers] = React.useState(0);

  return(
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, setNumPlayers, setNumPlayersPicked }}>
      { children }
    </BastaContext.Provider>
  )
}