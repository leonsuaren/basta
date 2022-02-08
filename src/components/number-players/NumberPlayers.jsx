import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { numberPlayersAnimation } from './anime';

export const NumberPlayers = () => {

  useEffect(() => {
    anime(numberPlayersAnimation);
  }, []);

  return (
    <div className='numPlayersWrapper' data-test='number-players-component'>
      <h2>Players: </h2>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">Two</button>
        <button type="button" className="btn btn-primary">Three</button>
        <button type="button" className="btn btn-primary">Four</button>
      </div>
    </div>
  );
};

NumberPlayers.propTypes = {
  numPlayers: PropTypes.number.isRequired
}