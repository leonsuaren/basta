import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const HowScoreWorks = () => {

  useEffect(() => {
    basicAnimationComponent('.howScoreWorksButtonAnimation')
  }, []);

  return (
    <div className='howToPlayButton'>
      <button className='howScoreWorksButtonAnimation btn btn-info' type='button' data-bs-toggle="modal" data-bs-target="#ModalScore">How Score Works?</button>
      <div className="modal fade " id="ModalScore" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">How Score Works!!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <h3>Let's make the rules!!</h3> 
             <ul>
             <li>Only one players write a word: 100 pts. <button className='btn btn-primary'/></li>
              <li>No repeated words: 50 pts. <button className='btn btn-success'/></li>
              <li>Repeated words: 25 pts. <button className='btn btn-warning'/></li>
              <li>No word: 0 pts. <button className='btn btn-danger'/></li>
              <li>Everybody write the same word: 0 pts. <button className='btn btn-danger'/></li>
             </ul>  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};