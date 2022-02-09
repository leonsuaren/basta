import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const PlayersNames = () => {

  useEffect(() => {
    basicAnimationComponent('.playersNamesWrapper');
  }, []);

  const NameInput = () => {
    return(
      <div>
        <div>hola</div>
      </div>
    )
  };

  return (
    <div className='playersNamesWrapper'>
      {Array(3).fill(<NameInput/>)}
    </div>
  )
};