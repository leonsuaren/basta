import React from 'react';
import { BastaContext } from '../../context/bastaContext';

import { NumberPlayers } from '../../components/number-players';
import { HowToPlay } from '../../components/how-to-play';
import { PlayersNames } from '../../components/players-names';

export const BastaOptions = () => {
  const bastaContext = React.useContext(BastaContext);
  const numPlayersPicked = bastaContext.numPlayersPicked;

  return (
    <div>
      <HowToPlay />
      <NumberPlayers />
      { numPlayersPicked ? <PlayersNames /> : '' }
    </div>
  )
};