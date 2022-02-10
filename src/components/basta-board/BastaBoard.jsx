import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const BastaBoard = () => {

  useEffect(() => {
    basicAnimationComponent('.bastaBoardWrapper');
  }, []);

  return(
    <div className='bastaBoardWrapper'>
    
    </div>
  )
}