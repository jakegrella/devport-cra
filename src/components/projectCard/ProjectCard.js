import React from 'react';
import StyledProjectCard from './ProjectCardStyles';
// import { FaLink, FaGithub, FaJsSquare, FaReact } from 'react-icons/fa';
import { FaLink, FaGithub } from 'react-icons/fa';

export default function ProjectCard(props) {
  const { mockImg, bgImg, imgAlt, title, description, demoLink, gitHubLink } =
    props;
  return (
    <>
      <StyledProjectCard className='project-card'>
        <div className='img-container'>
          <img className='mock' src={mockImg} alt={imgAlt} />
          <img className='bg' src={bgImg} alt={imgAlt} />
        </div>
        <div className='project-card-words'>
          <h3>{title}</h3>
          <div className='link-stack-container'>
            <div className='links'>
              <a href={demoLink} target='_blank' rel='noreferrer'>
                <FaLink />
              </a>
              <a href={gitHubLink} target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </StyledProjectCard>
    </>
  );
}
