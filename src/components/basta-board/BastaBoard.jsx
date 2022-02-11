import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const BastaBoard = () => {

  useEffect(() => {
    basicAnimationComponent('.bastaBoardWrapper');
  }, []);

  return (
    <div className='bastaBoardWrapper'>
      <form>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Country</span>
            <input className="form-control" />
          </div>
          <div>flag</div>
          <div>points</div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input className="form-control" />
          </div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Surname</span>
            <input className="form-control" />
          </div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Animal</span>
            <input className="form-control" />
          </div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Food</span>
            <input className="form-control" />
          </div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Color</span>
            <input className="form-control" />
          </div>
        </div>
        <div className='bastaWordAndPoints'>
          <div className='input-group input-group-sm mb-3'>
            <span className="input-group-text" id="inputGroup-sizing-sm">Brand</span>
            <input className="form-control" />
          </div>
        </div>
      </form>
    </div>
  )
}