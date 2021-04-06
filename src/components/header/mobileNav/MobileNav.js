import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn as LinkedInIcon,
  FaTwitter as TwitterIcon
} from 'react-icons/fa';
import StyledMobileNav from './mobileNavStyles';

const MobileNav = () => {
  return (
    <StyledMobileNav className='mobile-nav'>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <a
        href='https://www.linkedin.com/in/jakegrella/'
        target='_blank'
        rel='noreferrer'>
        <LinkedInIcon />
      </a>
      <a href='https://twitter.com/jakegrella' target='_blank' rel='noreferrer'>
        <TwitterIcon />
      </a>
    </StyledMobileNav>
  );
};

export default MobileNav;
