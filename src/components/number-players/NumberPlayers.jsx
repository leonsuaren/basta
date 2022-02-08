import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { numberPlayersAnimation } from './anime';

export const NumberPlayers = () => {
  // const [numPlayersPicked, setNumPlayersPicked] = React.useState(false);
  const [numPlayers, setNumPlayers] = React.useState(0);

  useEffect(() => {
    anime(numberPlayersAnimation);
  }, []);

  const handleOnPickTwoPlayers = () => {
    setNumPlayers(2);
  };

  const handleOnPickThreePlayers = () => {
    setNumPlayers(3);
  }

  const handleOnPickFourPlayers = () => {
    setNumPlayers(4);
  }

  const handleOnResetNumPlayers = () => {
    setNumPlayers(0);
  };

  return (
    <div className='numPlayersWrapper' data-test='number-players-component'>
      <h2>Players: </h2>
      <div className="btn-group" role="group">
        <button data-test="button-two" type="button" className="btn btn-primary" disabled={numPlayers === 2 || numPlayers === 0 ? false : true} onClick={handleOnPickTwoPlayers}>Two</button>
        <button data-test="button-three" type="button" className="btn btn-primary" disabled={numPlayers === 3 || numPlayers === 0 ? false : true} onClick={handleOnPickThreePlayers}>Three</button>
        <button type="button" className="btn btn-primary" disabled={numPlayers === 4 || numPlayers === 0 ? false : true} onClick={handleOnPickFourPlayers}>Four</button>
        <button type="button" className="btn btn-primary" onClick={handleOnResetNumPlayers} data-test="reset-button-component">Reset</button>
      </div>
    </div>
  );
};

NumberPlayers.propTypes = {
  numPlayers: PropTypes.number.isRequired,
}