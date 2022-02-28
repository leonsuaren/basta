import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';

import { basicAnimationComponent } from '../../helpers/anime';

export const Score = ({ round }) => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;

  console.log(round)

  useEffect(() => {
    basicAnimationComponent('.scoreAnimation');
  }, []);
  return (
    <div className='scoreAnimation scoreWrapper'>
      <div>
        <div>{round.round}</div>
        <div>Letter: {round.letterToPlay}</div>
      </div>
      <div>Player One</div>
      <div>Player Two</div>
      {numPlayers >= 3 ? <div>Player Three</div> : ''}
      {numPlayers === 4 ? <div>Player Four</div> : ''}
    </div>
  )
}