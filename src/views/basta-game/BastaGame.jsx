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
      <Score />
      <div className="bastaGameContainer">
        <BastaBoard />
        <BastaBoard />
        <BastaBoard />
        <BastaBoard />
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