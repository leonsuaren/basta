import React from 'react';
import PropTypes from 'prop-types';

export const NumberPlayers = () => {
  return (
    <div className='numPlayersWrapper' data-test='number-players-component'>
      <h2>Players: </h2>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary">Two</button>
        <button type="button" class="btn btn-primary">Three</button>
        <button type="button" class="btn btn-primary">Four</button>
      </div>
    </div>
  );
};

NumberPlayers.propTypes = {
  numPlayers: PropTypes.number.isRequired
}