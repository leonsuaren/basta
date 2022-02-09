import React from 'react';
import { BastaContext } from '../../context/bastaContext';

import { NumberPlayers } from '../../components/number-players';
import { HowToPlay } from '../../components/how-to-play';
import { PlayersNames } from '../../components/players-names';
import { AllSetReadyButton } from '../../components/all-set-ready-button';

export const BastaOptions = () => {
  const bastaContext = React.useContext(BastaContext);
  const numPlayersPicked = bastaContext.numPlayersPicked;
  const allSetUp = bastaContext.allSetUp;

  return (
    <div>
      <div>
        <HowToPlay />
      </div>
      <NumberPlayers />
      {numPlayersPicked ? <PlayersNames /> : ''}
      {allSetUp ? <AllSetReadyButton /> : ''}
    </div>
  )
};