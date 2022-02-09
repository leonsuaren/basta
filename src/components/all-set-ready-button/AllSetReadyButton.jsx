import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const AllSetReadyButton = () => {

  useEffect(() => {
    basicAnimationComponent('.buttonAnimation');
  });

  return (
    <div className='buttonWrapper'>
      <button className='btn btn-danger btn-lg buttonAnimation allSetButton'>All Set! Ready?</button>
    </div>
  )
};