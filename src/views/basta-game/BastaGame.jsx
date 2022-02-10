import React from 'react';

import { BastaBoard } from '../../components/basta-board';
import { Score } from '../../components/score'

export const BastaGame = () => {
  return (
    <div>
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