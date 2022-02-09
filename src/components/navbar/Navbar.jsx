import React, { useEffect } from 'react';
import { basicAnimationComponent } from '../../helpers/anime';

export const Navbar = () => {
  useEffect(() => {
    basicAnimationComponent('.navbar');
  }, []);

  return (
    <nav data-test="navbar-component" className='navbar nav justify-content-center'>
      <h3 className='nav-link brand'>Basta</h3>
    </nav>
  )
};