import React, { useEffect, useContext, useRef, useState } from 'react';
import { useFormik } from 'formik';

import { basicAnimationComponent } from '../../helpers/anime';
import { BastaContext } from '../../context/bastaContext';

export const PlayersNames = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
  const playerOneRef = useRef();
  const playerTwoRef = useRef();
  const playerThreeRef = useRef();
  const playerFourRef = useRef();

  useEffect(() => {
    basicAnimationComponent('.playersNamesWrapper');
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (numPlayers === 2) {
      bastaContext.setPlayersNames({
        playerOne: playerOneRef.current?.value,
        playerTwo: playerTwoRef.current?.value
      })
      bastaContext.setAllSetUp(true)
    } else if (numPlayers === 3) {
      bastaContext.setPlayersNames({
        playerOne: playerOneRef.current?.value,
        playerTwo: playerTwoRef.current?.value,
        playerThree: playerThreeRef.current?.value
      })
      bastaContext.setAllSetUp(true)
    } else if (numPlayers === 4) {
      bastaContext.setPlayersNames({
        playerOne: playerOneRef.current?.value,
        playerTwo: playerTwoRef.current?.value,
        playerThree: playerThreeRef.current?.value,
        palyerFour: playerFourRef.current?.value
      })
      bastaContext.setAllSetUp(true)
    }
  };

  return (
    <div className='playersNamesWrapper'>
      <h2>Who is playing?</h2>
      <form onSubmit={handleOnSubmit}>
        <div className='mb-3'>
          <label htmlFor='playerOne' className="form-label"> Player One: </label>
          <input ref={playerOneRef} type='text' name='playerOne' placeholder='Player One' className="form-control"/>
        </div>
        {numPlayers === 2 || numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Two: </label>
            <input ref={playerTwoRef} type='text' name='playerTwo' placeholder='Player tow' className="form-control" />
          </div> : ''
        }
        {numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Three: </label>
            <input ref={playerThreeRef} type='text' name='playerThree' placeholder='Player Three' className="form-control" />
          </div> : ''
        }
        {numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Four: </label>
            <input ref={playerFourRef} type='text' name='playerFour' placeholder='Player Four' className="form-control" />
          </div> : ''
        }
        <button type="submit" className="btn btn-primary">Done With the Names!</button>
      </form>
    </div>
  )
};