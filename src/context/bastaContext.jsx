import React, { createContext, useEffect } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
  const [numPlayers, setNumPlayers] = React.useState(0);
  const [playersNames, setPlayersNames] = React.useState({});
  const [lettersToPlay, setLettersToPlay] = React.useState([]);
  
  const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
  const [allSetUp, setAllSetUp] = React.useState(false);

  
  const lettersArray = []
  const getThreeRandomLetters = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0;i <=2; i++) {
    const random = Math.floor(26*Math.random());
    const randomLetter = letters[random];
      lettersArray.push(randomLetter);
    }
    return lettersArray;
  };

  useEffect(() => {
    getThreeRandomLetters();
    setLettersToPlay(lettersArray)
  }, []);

  return (
    <BastaContext.Provider value={{ numPlayers, numPlayersPicked, allSetUp, playersNames, lettersToPlay, setNumPlayers, setNumPlayersPicked, setAllSetUp, setPlayersNames }}>
      {children}
    </BastaContext.Provider>
  )
}