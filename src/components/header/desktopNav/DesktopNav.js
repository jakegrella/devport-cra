import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn as LinkedInIcon,
  FaTwitter as TwitterIcon
} from 'react-icons/fa';
import StyledDesktopNav from './desktopNavStyles';

const DesktopNav = () => {
  return (
    <StyledDesktopNav className='desktop'>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <a href='https://www.linkedin.com/in/jakegrella/' target='blank'>
        <LinkedInIcon />
      </a>
      <a href='https://twitter.com/jakegrella' target='blank'>
        <TwitterIcon />
      </a>
    </StyledDesktopNav>
  );
};

export default DesktopNav;
