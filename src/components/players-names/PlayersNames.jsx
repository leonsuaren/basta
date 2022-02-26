import React, { useEffect, useContext } from 'react';

import { useFormik } from 'formik';

import { basicAnimationComponent } from '../../helpers/anime';
import { BastaContext } from '../../context/bastaContext';

export const PlayersNames = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
  // const [nameError, setNameError] = useState(false);
  // const playerOneRef = useRef();
  // const playerTwoRef = useRef();
  // const playerThreeRef = useRef();
  // const playerFourRef = useRef();

  useEffect(() => {
    basicAnimationComponent('.playersNamesWrapper');
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   if (numPlayers === 2) {
  //     if (playerOneRef.current?.value === '') {
  //       setNameError(true);
  //       bastaContext.setAllSetUp(false);
  //     } else {
  //       bastaContext.setPlayersNames({
  //         playerOne: playerOneRef.current?.value,
  //       });
  //       setNameError(false);
  //     }
  //     if (playerTwoRef.current?.value === '') {
  //       setNameError(true);
  //       bastaContext.setAllSetUp(false);
  //     } else {
  //       bastaContext.setPlayersNames({
  //         playerTwo: playerTwoRef.current?.value
  //       });
  //       setNameError(false);
  //     }
  //     bastaContext.setAllSetUp(true);
  //   }
  //    else if (numPlayers === 3) {
  //     bastaContext.setPlayersNames({
  //       playerOne: playerOneRef.current?.value,
  //       playerTwo: playerTwoRef.current?.value,
  //       playerThree: playerThreeRef.current?.value
  //     })
  //   } else if (numPlayers === 4) {
  //     bastaContext.setPlayersNames({
  //       playerOne: playerOneRef.current?.value,
  //       playerTwo: playerTwoRef.current?.value,
  //       playerThree: playerThreeRef.current?.value,
  //       palyerFour: playerFourRef.current?.value
  //     })
  //   }
  // };
  const validate = values => {
    const errors = {};
    if (!values.playerOne) {
      errors.playerOne = 'Please enter a Name!';
    } else if (values.playerOne.length < 3) {
      errors.playerOne = 'Name must be at lease 3 characters!';
    }
    if (!values.playerTwo) {
      errors.playerTwo = 'Please enter a Name!';
    } else if (values.playerTwo.length < 3) {
      errors.playerTwo = 'Name must be at lease 3 characters!';
    }
    if (!values.playerThree) {
      errors.playerThree = 'Please enter a Name!';
    } else if (values.playerThree.length < 3) {
      errors.playerThree = 'Name must be at lease 3 characters!';
    }
    if (!values.playerFour) {
      errors.playerFour = 'Please enter a Name';
    } else if (values.playerFour.length < 3) {
      errors.playerFour = 'Name must be at lease 3 characters!';
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      playerOne: '',
      playerTwo: '',
      playerThree: '',
      playerFour: ''
    },
    onSubmit: values => {
      bastaContext.setPlayersNames(values)
      bastaContext.setAllSetUp(true)
    }
  });

  return (
    <div className='playersNamesWrapper'>
      <h2>Who is playing?</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='playerOne' className="form-label"> Player One: </label>
          <input type='text' name='playerOne' placeholder='Player One' className="form-control" onChange={formik.handleChange} value={formik.values.playerOne} defaultValue='user'/>
          {formik.errors.playerOne ? <div className='nameError'>{formik.errors.playerOne}</div> : ''}
        </div>
        {numPlayers === 2 || numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Two: </label>
            <input type='text' name='playerTwo' placeholder='Player tow' className="form-control" onChange={formik.handleChange} value={formik.values.playerTwo} defaultValue='user'/>
          </div> : ''
        }
        {numPlayers === 3 || numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Three: </label>
            <input type='text' name='playerThree' placeholder='Player Three' className="form-control" onChange={formik.handleChange} value={formik.values.playerThree} defaultValue='user'/>
          </div> : ''
        }
        {numPlayers === 4 ?
          <div className='mb-3'>
            <label htmlFor='playerOne' className="form-label"> Player Four: </label>
            <input type='text' name='playerFour' placeholder='Player Four' className="form-control" onChange={formik.handleChange} value={formik.values.playerFour} defaultValue='user'/>
          </div> : ''
        }
        <button type="submit" className="btn btn-primary">Done With the Names!</button>
      </form>
    </div>
  )
};