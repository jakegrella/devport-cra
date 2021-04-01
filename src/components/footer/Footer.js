import React from 'react';
import StyledFooter from './FooterStyles';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>© Jake Grella</p>
        <a
          href='https://drive.google.com/file/d/1RUm0KNUk3rjN3Ag80BnXeasCi8WiSZ_5/view?usp=sharing'
          target='blank'
          rel='noreferrer'>
          Resume
        </a>
      </div>
      <div>
        <a href='tel:+17082051007'>(708) 205-1007</a>
        <a href='mailto:jake@jakegrella.com' target='blank' rel='noreferrer'>
          jake@jakegrella.com
        </a>
      </div>
      <div>
        <a
          href='https://unsplash.com/@jakegrella'
          target='blank'
          rel='noreferrer'>
          Photo
        </a>
        <a href='https://www.dwylco.com' target='blank' rel='noreferrer'>
          Dwylco ⚠️
        </a>
      </div>
    </StyledFooter>
  );
}
