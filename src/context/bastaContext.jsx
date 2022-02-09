import React, { createContext } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
    const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
    const [numPlayers, setNumPlayers] = React.useState(0);
    const [ allSetUp, setAllSetUp ] = React.useState(false);

  return(
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, allSetUp, setNumPlayers, setNumPlayersPicked, setAllSetUp }}>
      { children }
    </BastaContext.Provider>
  )
}