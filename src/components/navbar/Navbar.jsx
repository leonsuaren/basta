import React, { useEffect } from 'react';
import anime from 'animejs';
import { navbarAnimation } from './anime';

export const Navbar = () => {
  useEffect(() => {
    anime(navbarAnimation);
  }, []);

  return (
    <nav data-test="navbar-component" className='navbar nav justify-content-center'>
      <h3 className='nav-link'>Basta</h3>
    </nav>
  )
};