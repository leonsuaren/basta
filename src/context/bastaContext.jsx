import React, { createContext, useState } from 'react';

export const BastaContext = createContext();

export const BastaContextProvider = ({ children }) => {
  const [ randomLetter, setRandomLetter ] = useState('m')

  return(
    <BastaContext.Provider value={{ randomLetter }}>
      { children }
    </BastaContext.Provider>
  )
}