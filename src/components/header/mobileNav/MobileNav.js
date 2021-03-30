import React from 'react';
import { Link } from 'react-router-dom';

import StyledMobileNav from './mobileNavStyles';

const MobileNav = () => {
  return (
    <StyledMobileNav className='mobile-nav'>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>contact</Link>
    </StyledMobileNav>
  );
};

export default MobileNav;
