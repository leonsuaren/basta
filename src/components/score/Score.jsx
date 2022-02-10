import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const Score = () => {

  useEffect(() => {
    basicAnimationComponent('.scoreAnimation');
  }, []);

  return(
    <div className='scoreAnimation scoreWrapper'>
    <div>Round</div>
    <div>Player One</div>
    <div>Player Two</div>
    <div>Player Three</div>
    <div>Player Four</div>
    </div>
  )
}