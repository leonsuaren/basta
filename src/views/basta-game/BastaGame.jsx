import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';

import { BastaBoard } from '../../components/basta-board';
import { Score } from '../../components/score';
import { Counter } from '../../components/counter';

export const BastaGame = () => {
  const bastaContext = useContext(BastaContext);
  const numPlayers = bastaContext.numPlayers;
  const lettersToPlay = bastaContext.lettersToPlay;
  const playersNames = bastaContext.playersNames;
  const [showCounter, setShowCounter] = React.useState(true);
  const [playerOneTurn, setPlayerOneTurn] = React.useState(false);
  const [playerTwoTurn, setPlayerTwoTurn] = React.useState(false);
  const [playerThreeTurn, setPlayerThreeTurn] = React.useState(false);
  const [playerFourTurn, setPlayerFourTurn] = React.useState(false);
  const [inputDisabled, setInputDisabled] = React.useState(false);
  const [round, setRound] = React.useState({});
  const [roundOne, setRoundOne] = React.useState(
    {
      active: false,
      round: 'Round One',
      letterToPlay: lettersToPlay[0],
      playerOne: [playersNames.playerOne, playerOneTurn],
      playerTwo: playersNames.playerTwo,
      playerThree: playersNames.playerThree,
      playerFour: playersNames.playerFour
    }
  );
  const [roundTwo, setRoundTwo] = React.useState(
    {
      active: false,
      round: 'Round Two',
      letterToPlay: lettersToPlay[1],
      playerOne: playersNames.playerOne,
      playerTwo: playersNames.playerTwo,
      playerThree: playersNames.playerThree,
      playerFour: playersNames.playerFour
    }
  );
  const [roundThree, setRoundThree] = React.useState(
    {
      active: false,
      round: 'Round Three',
      letterToPlay: lettersToPlay[2],
      playerOne: playersNames.playerOne,
      playerTwo: playersNames.playerTwo,
      playerThree: playersNames.playerThree,
      playerFour: playersNames.playerFour
    }
  );

  useEffect(() => {
    setRound(roundOne);
    setPlayerOneTurn(true);
    setTimeout(() => {
      setShowCounter(false);
    }, 5000);
    if (numPlayers === 2) {
      setTimeout(() => {
        setPlayerOneTurn(false);
        setPlayerTwoTurn(true);
        setShowCounter(true)
      }, 35000);
      setTimeout(() => {
        setShowCounter(false);
      }, 40000)
      setTimeout(() => {
        setPlayerOneTurn(true);
        setPlayerTwoTurn(true);
        setInputDisabled(true);
      }, 70000);
    }
    // if (numPlayers === 3) {
    //   setTimeout(() => {
    //     setPlayerOneTurn(false);
    //     setPlayerTwoTurn(true);
    //   }, 65000);
    // }
    // setTimeout(() => {
    //   setRound(roundTwo)
    // }, 36000);

  }, []);
  return (
    <div>
      {showCounter && <Counter round={round} />}
      <Score round={round} />
      <div className="bastaGameContainer">
        {playerOneTurn && <div><BastaBoard name={round.playerOne} disabled={inputDisabled} /></div>}
        {playerTwoTurn && <div><BastaBoard name={round.playerTwo} disabled={inputDisabled} /></div>}
        {playerThreeTurn && <div>{numPlayers >= 3 ? <BastaBoard name={round.playerThree} disabled={inputDisabled}/> : ''}</div>}
        {playerFourTurn && <div>{numPlayers === 4 ? <BastaBoard name={round.playerFour} disabled={inputDisabled}/> : ''}</div>}
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