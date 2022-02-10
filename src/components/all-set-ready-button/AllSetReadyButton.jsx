import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';
import { basicAnimationComponent } from '../../helpers/anime';

export const AllSetReadyButton = () => {
  const bastaContext = useContext(BastaContext);

  useEffect(() => {
    basicAnimationComponent('.buttonAnimation');
  }, []);

  return (
    <div className='buttonWrapper'>
      <button className='btn btn-danger btn-lg buttonAnimation allSetButton'>All Set! Ready?</button>
    </div>
  )
};