import React, { useState } from 'react';
import MobileNav from './MobileNav';
import StyledHamburger from './hamburgerStyles';

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState('false');

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavClick = () => {
    setShowMenu('false');
  };

  return (
    <StyledHamburger>
      <button className='hamburger' onClick={handleClick}>
        {showMenu ? <h2>=</h2> : <h2>x</h2>}
      </button>
      <div onClick={handleNavClick}>
        {showMenu ? null : <MobileNav onClick={handleNavClick} />}
      </div>
    </StyledHamburger>
  );
};

export default Hamburger;
