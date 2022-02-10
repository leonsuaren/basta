import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { BastaContext } from '../../context/bastaContext';
import { basicAnimationComponent } from '../../helpers/anime';

export const AllSetReadyButton = () => {
  const bastaContext = useContext(BastaContext);

  useEffect(() => {
    basicAnimationComponent('.buttonAnimation');
  }, []);

  const handleOnClick = () => {
    bastaContext.setAllSetUp(false);
    bastaContext.setNumPlayersPicked(false);
  }

  return (
    <div className='buttonWrapper'>
      <Link to='/basta-game'>
        <button className='btn btn-danger btn-lg buttonAnimation allSetButton' onClick={handleOnClick}>All Set! Ready?</button>
      </Link>
    </div>
  )
};