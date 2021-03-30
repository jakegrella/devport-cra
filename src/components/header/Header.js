import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './mobileNav/Hamburger';
import logo from '../../assets/jg-logo-svg.svg';
import StyledHeader from './HeaderStyles';
import DesktopNav from './desktopNav/DesktopNav';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <img src={logo} className='logo' alt='Jake Grella' />
      </Link>

      <Hamburger className='hamburger' />
      <DesktopNav className='desktop' />
    </StyledHeader>
  );
};

export default Header;
