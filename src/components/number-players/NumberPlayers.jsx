import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { BastaContext } from '../../context/bastaContext';

import { basicAnimationComponent } from '../../helpers/anime';

export const NumberPlayers = () => {
  const bastaContext = React.useContext(BastaContext);
  const numPlayersContext = bastaContext.numPlayers;
  // const [numPlayers, setNumPlayers] = React.useState(0);

  useEffect(() => {
    basicAnimationComponent('.numPlayersWrapper');
  }, []);

  const handleOnPickTwoPlayers = () => {
    bastaContext.setNumPlayers(2);
  };

  const handleOnPickThreePlayers = () => {
    bastaContext.setNumPlayers(3);
  }

  const handleOnPickFourPlayers = () => {
    bastaContext.setNumPlayers(4);
  }

  const handleOnResetNumPlayers = () => {
    bastaContext.setNumPlayers(0);
  };

  return (
    <div className='numPlayersWrapper' data-test='number-players-component'>
      <h2>Players: </h2>
      <div className="btn-group" role="group">
        <button data-test="button-two" type="button" className="btn btn-primary" disabled={numPlayersContext === 2 || numPlayersContext === 0 ? false : true} onClick={handleOnPickTwoPlayers}>Two</button>
        <button data-test="button-three" type="button" className="btn btn-primary" disabled={numPlayersContext === 3 || numPlayersContext === 0 ? false : true} onClick={handleOnPickThreePlayers}>Three</button>
        <button type="button" className="btn btn-primary" disabled={numPlayersContext === 4 || numPlayersContext === 0 ? false : true} onClick={handleOnPickFourPlayers}>Four</button>
        <button type="button" className="btn btn-primary" onClick={handleOnResetNumPlayers} data-test="reset-button-component">Reset</button>
      </div>
    </div>
  );
};

NumberPlayers.propTypes = {
  numPlayers: PropTypes.number.isRequired,
}