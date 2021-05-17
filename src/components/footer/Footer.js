import React from 'react';
import StyledFooter from './FooterStyles';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>© jake grella</p>
        <a
          href='https://drive.google.com/file/d/1uYNaSvkKEBtHScfWfOb_VdHc_15iqS12/view?usp=sharing'
          target='_blank'
          rel='noreferrer'>
          resume
        </a>
      </div>
      <div>
        <a href='tel:+17082051007'>(708) 205-1007</a>
        <a href='mailto:jake@jakegrella.com' target='_blank' rel='noreferrer'>
          jake@jakegrella.com
        </a>
      </div>
      <div>
        <a href='https://meet.jakegrella.com' target='_blank' rel='noreferrer'>
          meet.jakegrella.com
        </a>
      </div>
    </StyledFooter>
  );
}
