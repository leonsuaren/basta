import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';

import { BastaBoard } from '../../components/basta-board';
import { Score } from '../../components/score';
import { Counter } from '../../components/counter';

export const BastaGame = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
  const lettersToPlay = bastaContext.lettersToPlay;
  const [showCounter, setShowCounter] = React.useState(true);
  const [round, setRound] = React.useState({});
  const [roundOne, setRoundOne] = React.useState(
    {
      active: false,
      round: 'Round One',
      letterToPlay: lettersToPlay[0]
    }
  );
  const [roundTwo, setRoundTwo] = React.useState(
    {
      active: false,
      round: 'Round Two',
      letterToPlay: lettersToPlay[1]
    }
  );
  const [roundThree, setRoundThree] = React.useState(
    {
      active: false,
      round: 'Round Three',
      letterToPlay: lettersToPlay[2]
    }
  );

  useEffect(() => {
    setRound(roundOne);
    setTimeout(() => {
      setShowCounter(false);
    }, 6000);
    setTimeout(() => {
      setRound(roundTwo)
    }, 36000);

  }, []);
  return (
    <div>
      {showCounter && <Counter round={round} />}
      <Score round={round}  />
      <div className="bastaGameContainer">
        <BastaBoard />
        <BastaBoard />
        {numPlayers >= 3 ? <BastaBoard /> : ''}
        {numPlayers === 4 ? <BastaBoard /> : ''}
      </div>
      <div className='footerRules'>
        <ul>
          <li>Only one players write a word: 100 pts. <button className='btn btn-primary' /></li>
          <li>No repeated words: 50 pts. <button className='btn btn-success' /></li>
          <li>Repeated words: 25 pts. <button className='btn btn-warning' /></li>
          <li>No word: 0 pts. <button className='btn btn-danger' /></li>
          <li>Everybody write the same word: 0 pts. <button className='btn btn-danger' /></li>
        </ul>
      </div>
    </div>
  )
}