import React, { createContext } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
  const [numPlayers, setNumPlayers] = React.useState(0);
  const [playersNames, setPlayersNames] = React.useState({});
  
  const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
  const [allSetUp, setAllSetUp] = React.useState(false);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const random = Math.floor(26*Math.random());
  const randomLetter = letters[random];

  return (
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, allSetUp, playersNames, setNumPlayers, setNumPlayersPicked, setAllSetUp, setPlayersNames }}>
      {children}
    </BastaContext.Provider>
  )
}