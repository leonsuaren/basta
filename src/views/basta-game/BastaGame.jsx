import React, { useEffect } from 'react';

import { BastaBoard } from '../../components/basta-board';
import { Score } from '../../components/score';
import { Counter } from '../../components/counter';

export const BastaGame = () => {
  const [showCounter, setShowCounter] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCounter(false);
    }, 5000);
  }, []);

  return (
    <div>
      {showCounter && <Counter />}
      <Score/>
      <div className="bastaGameContainer">
        <BastaBoard />
        <BastaBoard />
        <BastaBoard />
        <BastaBoard />
      </div>
    </div>
  )
}