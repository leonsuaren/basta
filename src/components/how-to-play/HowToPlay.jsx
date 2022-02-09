import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const HowToPlay = () => {
  useEffect(() => {
    basicAnimationComponent('.howToPlayButton')
  }, []);

  return (
    <div className='buttonWrapper'>
      <button className='howToPlayButton btn btn-info'>How to Play!!</button>
    </div>
  )
};