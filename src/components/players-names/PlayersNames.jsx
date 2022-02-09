import React, { useEffect, useContext } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';
import { BastaContext } from '../../context/bastaContext';

export const PlayersNames = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
  console.log(numPlayers)
  useEffect(() => {
    basicAnimationComponent('.playersNamesWrapper');
  }, []);

  return (
    <div className='playersNamesWrapper'>
      <h2>Who is playing?</h2>
      <form>
        <div className='mb-3'>
          <label for='playerOne' className="form-label"> Player One: </label>
          <input type='text' name='playerOne' placeholder='Player One' className="form-control" />
        </div>
        {numPlayers === 2 || numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Two: </label>
            <input type='text' name='playerTwo' placeholder='Player tow' className="form-control" />
          </div> : ''
        }
        {numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Three: </label>
            <input type='text' name='playerThree' placeholder='Player Three' className="form-control" />
          </div> : ''
        }
        {numPlayers === 4 ?
          <div className='mb-3'>
            <label for='playerOne' className="form-label"> Player Four: </label>
            <input type='text' name='playerFour' placeholder='Player Four' className="form-control" />
          </div> : ''
        }
        <button type="submit" class="btn btn-primary">Done With the Names!</button>
      </form>
    </div>
  )
};