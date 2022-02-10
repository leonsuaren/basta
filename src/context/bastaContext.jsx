import React, { createContext } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
  const [numPlayers, setNumPlayers] = React.useState(0);
  const [playersNames, setPlayersNames] = React.useState({});
  
  const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
  const [allSetUp, setAllSetUp] = React.useState(false);

  return (
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, allSetUp, playersNames, setNumPlayers, setNumPlayersPicked, setAllSetUp, setPlayersNames }}>
      {children}
    </BastaContext.Provider>
  )
}