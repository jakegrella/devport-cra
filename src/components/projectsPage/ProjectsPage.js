import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import lanMock from '../../assets/lan-mock.png';
import portfolioMock from '../../assets/portfolio-mock.png';

export default function projectsPage() {
  return (
    <section className='project-cards-section'>
      {/* <ProjectCard
        mockImg={lanMock}
        bgImg='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3'
        imgAlt='waterpolo.co'
        title='waterpolo.co'
        description='A platform for users to access everything about the sport of water polo. From news to rules to stats and rankings, the goal of waterpolo.co is to grow the community around water polo. There is also a heavy emphasis on post high school options for athletes.'
        demoLink='https://waterpolo.co'
        gitHubLink='https://github.com/Lambda-School-Labs/lan-fe-a'
      /> */}
      <ProjectCard
        mockImg={lanMock}
        bgImg='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3'
        imgAlt='lambda alumni network'
        title='lambda alumni network'
        description='A unified, private community for Lambda School alumni to connect, advance their careers, and give back in a forum-like environment. Creating a place for all alumni to stay in touch has been an important objective to Lambda School, and although this is a work in progress, it is a great start.'
        demoLink='https://main.d37zm5ayhfot8q.amplifyapp.com/'
        gitHubLink='https://github.com/Lambda-School-Labs/lan-fe-a'
      />
      {/* <ProjectCard
        mockImg={lanMock}
        bgImg='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
        imgAlt='townsquare'
        title='townsquare'
        description='A place for citizens to make their voices heard on the issues they would like to see resolved in their community. Townsquare aims to make the comments of inidividuals in an area visible to local officals.'
        demoLink='https://jakegrella.com'
        gitHubLink='https://github.com/jakegrella'
      /> */}
      {/* <ProjectCard
        mockImg={lanMock}
        bgImg='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
        imgAlt='relentless drive'
        title='RELENTLESS DRIVE'
        description='A place for citizens to make their voices heard on the issues they would like to see resolved in their community. Townsquare aims to make the comments of inidividuals in an area visible to local officals.'
        demoLink='https://jakegrella.com'
        gitHubLink='https://github.com/jakegrella'
      /> */}
      <ProjectCard
        mockImg={portfolioMock}
        bgImg='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
        imgAlt='portfolio site'
        title='this site'
        description='This site used to showcase my work. Although simple, I feel that it is an important piece that is constantly evolving, and allows me to share my work as I desire.'
        demoLink='https://jakegrella.com'
        gitHubLink='https://github.com/jakegrella/devport-cra'
      />
    </section>
  );
}
