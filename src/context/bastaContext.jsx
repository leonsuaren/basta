import React, { createContext } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
    const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
    const [numPlayers, setNumPlayers] = React.useState(0);
    const [allSetUp, setAllSetUp] = React.useState(false);
    const [playersNames, setPlayersNames] = React.useState({});

    console.log(playersNames);

  return(
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, allSetUp, playersNames, setNumPlayers, setNumPlayersPicked, setAllSetUp, setPlayersNames }}>
      { children }
    </BastaContext.Provider>
  )
}