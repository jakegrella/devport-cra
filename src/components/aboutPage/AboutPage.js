import React, { useEffect, useState } from 'react';
import StyledAboutPage from './AboutPageStyles';
import avatar from '../../assets/avatar.jpeg';
import axios from 'axios';

export default function AboutPage() {
  const [unsplashViews, setUnsplashViews] = useState(0);

  const getApiData = () => {
    // unsplash
    axios
      .get(
        'https://api.unsplash.com/users/jakegrella/?client_id=L4591ozG82_pYS3W0BmQmQxfuhA8kKfhZS2P6PDl-Ak'
      )
      .then((res) => {
        setUnsplashViews(res.data.total_photos);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <StyledAboutPage>
      <section className='about-top'>
        <div className='about-top-imgAndLinks'>
          <img src={avatar} alt='jake grella' />
          <div className='about-top-links'>
            <a
              href='https://drive.google.com/file/d/1RUm0KNUk3rjN3Ag80BnXeasCi8WiSZ_5/view?usp=sharing'
              target='_blank'
              rel='noreferrer'>
              resume
            </a>
            <a
              href='https://github.com/jakegrella'
              target='_blank'
              rel='noreferrer'>
              github
            </a>
            <a
              href='https://www.linkedin.com/in/jakegrella/'
              target='_blank'
              rel='noreferrer'>
              linkedin
            </a>
            <a
              href='https://twitter.com/jakegrella'
              target='_blank'
              rel='noreferrer'>
              twitter
            </a>
          </div>
        </div>
        <div className='about-top-words'>
          <h2>Hey, I'm Jake.</h2>
          <p>
            I’ve spent my quarantine at Lambda School studying web development
            concepts in their hands-on, immersive program.
          </p>
          <p>
            Prior, I graduated from the University of Illinois at Chicago with a
            Bachelor of Business Administration while taking electives in math
            and computer science.
          </p>
          <p>
            I have interests in photography, music, and sustainable energy. I
            have a strong desire to work on projects that make a difference.
          </p>
        </div>
      </section>
      <section className='about-bottom'>
        <h3>
          A Snapshot
          <br /> About Me:
        </h3>
        <div className='about-bottom-apiBlurbs'>
          <a
            href='https://github.com/jakegrella'
            target='_blank'
            rel='noreferrer'>
            <p>repos on github</p>
            <p>90</p>
          </a>
          <a
            href='https://unsplash.com/@jakegrella'
            target='_blank'
            rel='noreferrer'>
            <p>photos on unsplash</p>
            <p>{unsplashViews}</p>
          </a>
          <a
            href='https://open.spotify.com/playlist/37i9dQZF1EM2lBK9f4me6s?si=4c0b119ae6124d3a'
            target='_blank'
            rel='noreferrer'>
            <p>songs listened to</p>
            <p>a lot</p>
          </a>
          <a
            href='https://twitter.com/jakegrella'
            target='_blank'
            rel='noreferrer'>
            <p>tweets</p>
            <p>97</p>
          </a>
        </div>
      </section>
    </StyledAboutPage>
  );
}
