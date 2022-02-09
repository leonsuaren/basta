import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';

import { basicAnimationComponent } from '../../helpers/anime';
import { BastaContext } from '../../context/bastaContext';

export const PlayersNames = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
 
  useEffect(() => {
    basicAnimationComponent('.playersNamesWrapper');
  }, []);

  const handleOnClick = () => {
    bastaContext.setAllSetUp(true);
  };

  const formik = useFormik({
    initialValues: {
      playerOne: '',
      playerTwo: '',
      playerThree: '',
      playerFour: ''
    }, 
    onSubmit: values => {
      bastaContext.setPlayersNames({
        playerOne: values.playerOne,
        playerTwo: values.playerTwo,
        playerThree: values.playerThree,
        playerFour: values.playerFour
      })
    }
  });

  return (
    <div className='playersNamesWrapper'>
      <h2>Who is playing?</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label for='playerOne' className="form-label"> Player One: </label>
          <input type='text' name='playerOne' placeholder='Player One' className="form-control" onChange={formik.handleChange} value={formik.values.playerOne}/>
        </div>
        {numPlayers === 2 || numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Two: </label>
            <input type='text' name='playerTwo' placeholder='Player tow' className="form-control" onChange={formik.handleChange} value={formik.values.playerTwo}/>
          </div> : ''
        }
        {numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Three: </label>
            <input type='text' name='playerThree' placeholder='Player Three' className="form-control" onChange={formik.handleChange} value={formik.values.playerThree}/>
          </div> : ''
        }
        {numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Four: </label>
            <input type='text' name='playerFour' placeholder='Player Four' className="form-control" onChange={formik.handleChange} value={formik.values.playerFour}/>
          </div> : ''
        }
        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Done With the Names!</button>
      </form>
    </div>
  )
};