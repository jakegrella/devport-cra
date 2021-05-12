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
      <Link to='/work'>work</Link>
      <Link to='/about'>about</Link>
      <a
        className='icons'
        href='https://www.linkedin.com/in/jakegrella/'
        target='_blank'
        rel='noreferrer'>
        <LinkedInIcon />
      </a>

      <a
        className='icons'
        href='https://twitter.com/jakegrella'
        target='_blank'
        rel='noreferrer'>
        <TwitterIcon />
      </a>
    </StyledDesktopNav>
  );
};

export default DesktopNav;
