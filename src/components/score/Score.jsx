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
      <div>{round.playerOne}'s score</div>
      <div>{round.playerTwo}'s score</div>
      {numPlayers >= 3 ? <div>{round.playerThree}'s score</div> : ''}
      {numPlayers === 4 ? <div>{round.playerFour}'s score</div> : ''}
    </div>
  )
}