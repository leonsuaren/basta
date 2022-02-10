import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { BastaContext } from '../../context/bastaContext';

import { basicAnimationComponent } from '../../helpers/anime';

export const NumberPlayers = () => {
  const bastaContext = React.useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;

  useEffect(() => {
    basicAnimationComponent('.numPlayersWrapper');
  }, []);

  const handleOnPickTwoPlayers = () => {
    bastaContext.setNumPlayers(2);
    bastaContext.setNumPlayersPicked(true);
  };

  const handleOnPickThreePlayers = () => {
    bastaContext.setNumPlayers(3);
    bastaContext.setNumPlayersPicked(true);
  }

  const handleOnPickFourPlayers = () => {
    bastaContext.setNumPlayers(4);
    bastaContext.setNumPlayersPicked(true);
  }

  const handleOnResetNumPlayers = () => {
    bastaContext.setNumPlayers(0);
    bastaContext.setNumPlayersPicked(false);
    bastaContext.setAllSetUp(false);
    bastaContext.setPlayersNames({});
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