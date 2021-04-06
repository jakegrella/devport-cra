import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';
import ProjectCard from '../projectCard/ProjectCard';
import lanMock from '../../assets/lan-mock.png';

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className='home-banner'>
        <h2>
          Full-stack software developer currently seeking a place to make a
          difference.
        </h2>
      </div>
      <section className='project-cards-section'>
        <ProjectCard
          mockImg={lanMock}
          bgImg='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3'
          imgAlt='lambda alumni network'
          title='Lambda Alumni Network'
          description='A unified, private community for Lambda School alumni to connect, advance their careers, and give back in a forum-like environment.'
          demoLink='https://main.d37zm5ayhfot8q.amplifyapp.com/'
          gitHubLink='https://github.com/Lambda-School-Labs/lan-fe-a'
        />
        {/* <ProjectCard
          imgURL='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
          imgAlt='townsquare'
          title='Townsquare'
          description='A platform for citizens to make their voices heard on the issues they would like to see resolved in their community.'
          demoLink='https://jakegrella.com'
          gitHubLink='https://github.com/jakegrella'
        /> */}
        <Link to='/projects' className='all-projects-btn'>
          View All Projects
        </Link>
      </section>
      <section className='get-in-touch'>
        <a href='mailto:jake@jakegrella.com'>Get in touch.</a>
        <p>
          I currently live in Chicago, IL, and I am looking for remote work, but
          I am interested in relocating if it means I am part of something
          important or impactful.
        </p>
      </section>
    </StyledHomePage>
  );
}
