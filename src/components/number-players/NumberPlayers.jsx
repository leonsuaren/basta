import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { numberPlayersAnimation } from './anime';

export const NumberPlayers = () => {
  const [ numPlayersPicked, setNumPlayersPicked ] = React.useState(false);

  useEffect(() => {
    anime(numberPlayersAnimation);
  }, []);

  const handleOnPickTwoPlayers = () => {
    setNumPlayersPicked(true)
  }
  
  return (
    <div className='numPlayersWrapper' data-test='number-players-component'>
      <h2>Players: </h2>
      <div className="btn-group" role="group">
        <button data-test="button-two" type="button" className="btn btn-primary" onClick={handleOnPickTwoPlayers}>Two</button>
        <button type="button" className="btn btn-primary">Three</button>
        <button type="button" className="btn btn-primary">Four</button>
      </div>
    </div>
  );
};

NumberPlayers.propTypes = {
  numPlayers: PropTypes.number.isRequired,
  numPlayersPicked: PropTypes.bool.isRequired,
  namePlayersFill: PropTypes.bool.isRequired
}