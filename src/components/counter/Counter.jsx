import React, { useEffect, useContext } from 'react';
import { BastaContext } from '../../context/bastaContext';

export const Counter = () => {
  const bastaContext = useContext(BastaContext);
  const playLetter = bastaContext.randomLetter;
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [letter, setLetter] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(false)
    }, 1000);
    setTimeout(() => {
      setOne(true);
      setTwo(false);
      setThree(false);
      setLetter(false)
    }, 2000);

    setTimeout(() => {
      setOne(false);
      setTwo(true);
      setThree(false);
      setLetter(false);
    }, 3000);

    setTimeout(() => {
      setOne(false);
      setTwo(false);
      setThree(true);
      setLetter(false);
    }, 4000);
    setTimeout(() => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(true);
    }, 5000);
    setTimeout(() => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setLetter(false);
    }, 6000);
  }, []);

  return (
    <div className='blurScreen'>
      <div className='counterWrapper'>
        <h1 className='centerContent'>Round One</h1>
        {one && <h1 className='centerContent'>1</h1>}
        {two && <h1 className='centerContent'>2</h1>}
        {three && <h1 className='centerContent'>3</h1>}
        {letter && <h1 className='centerContent'>Letter {playLetter}</h1>}
      </div>
    </div>
  );
}