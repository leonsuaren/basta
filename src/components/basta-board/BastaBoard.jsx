import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

import { DisplayScore } from '../../components/display-score';

export const BastaBoard = ({ name, disabled }) => {

  useEffect(() => {
    basicAnimationComponent('.bastaBoardWrapper');
  }, []);

  return (
    <div className='bastaBoardWrapper'>
      <h2>{name}</h2>
      <form>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Country</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input className="form-control" disabled={disabled} />
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Surname</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Animal</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Food</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Color</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Brand</span>
            <input className="form-control" disabled={disabled}/>
          </div>
          <DisplayScore />
        </div>
      </form>
    </div>
  )
}