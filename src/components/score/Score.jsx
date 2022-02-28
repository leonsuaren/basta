import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const Score = ({ round }) => {

  useEffect(() => {
    basicAnimationComponent('.scoreAnimation');
  }, []);
  console.log(round)
  return(
    <div className='scoreAnimation scoreWrapper'>
    <div>{round.round}</div>
    <div>Player One</div>
    <div>Player Two</div>
    <div>Player Three</div>
    <div>Player Four</div>
    </div>
  )
}