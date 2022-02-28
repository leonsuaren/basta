import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';

export const Counter = ({ round }) => {
  const bastaContext = useContext(BastaContext);
  const playLetter = round.letterToPlay;
  const [showRound, setShowRound] = React.useState(false);
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [letter, setLetter] = React.useState(false);

  console.log(round);

  useEffect(() => {
      setShowRound(true);
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(false)
    setTimeout(() => {
      setShowRound(false);
      setOne(true);
      setTwo(false);
      setThree(false);
      setLetter(false)
    }, 1000);
    setTimeout(() => {
      setShowRound(false);
      setOne(false);
      setTwo(true);
      setThree(false);
      setLetter(false);
    }, 2000);
    setTimeout(() => {
      setShowRound(false);
      setOne(false);
      setTwo(false);
      setThree(true);
      setLetter(false);
    }, 3000);
    setTimeout(() => {
      setShowRound(false);
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(true);
    }, 4000);
    setTimeout(() => {
      setShowRound(false);
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(false);
    }, 5000);
  }, []);

  console.log(round);

  return (
    <div className='blurScreen'>
      <div className='counterWrapper'>
        {showRound && <h1 className='roundText'>{round.round}, {round.playerOne}'s turn</h1>}
        {one && <h1 className='centerContent'>1</h1>}
        {two && <h1 className='centerContent'>2</h1>}
        {three && <h1 className='centerContent'>3</h1>}
        {letter && <h1 className='centerContent'>Letter {playLetter}</h1>}
      </div>
    </div>
  );
}