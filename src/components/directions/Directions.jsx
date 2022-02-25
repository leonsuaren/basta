import React from 'react';

export const Directions = () => {
  return (
    <div className='howToPlayButton'>
      <button className='howScoreWorksButtonAnimation btn btn-info' type='button' data-bs-toggle="modal" data-bs-target="#ModalScore">Directions</button>
      <div className="modal fade " id="ModalScore" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">Directions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>Basta is an easy game!!</h3>
              <ul>
                <li>Everything starts with a letter.</li>
                <li>The system will give you a random letter to play with.</li>
                <li>You have to thing of words that start with that letter.</li>
                <li>The board will ask you for some specific words that you have to write down.</li>
                <li>You only have 30 seconds to write as many words as you can.</li>
                <li>After that 30 seconds is turn to other player.</li>
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