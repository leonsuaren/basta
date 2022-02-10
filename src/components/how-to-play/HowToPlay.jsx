import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const HowToPlay = () => {

  useEffect(() => {
    basicAnimationComponent('.howToPlayButton')
  }, []);

  return (
    <div className='buttonWrapper'>
      <button className='howToPlayButton btn btn-info' type='button' data-bs-toggle="modal" data-bs-target="#Modal">How to Play?</button>
      <div className="modal fade " id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">How to Play Basta!!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <h3>Let's go step by step!!</h3> 
             <h4>On the first section: </h4> 
             <ul>
              <li>You have to choose the number of players by clicking on the numbers buttons</li>
              <li>You can click on the reset button at any time in case you want to change the number of players</li>
              <li>Ones you choose the number of players the system will ask you to write a name for each of the players</li>
              <li>After that a start button will appear at the botton of the screen (All set!! Ready?)</li>
              <li>Once you click on the button (All set!! Ready?) the game will start</li>
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