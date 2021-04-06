import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import lanMock from '../../assets/lan-mock.png';
import dwylcoMock from '../../assets/dwylco-mock.png';
import expatLogMock from '../../assets/expat-log-mock.png';
import portfolioMock from '../../assets/portfolio-mock.png';

export default function projectsPage() {
  return (
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
        bgImg='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
        imgAlt='townsquare'
        title='Townsquare'
        description='A platform for citizens to make their voices heard on the issues they would like to see resolved in their community.'
        demoLink='https://jakegrella.com'
        gitHubLink='https://github.com/jakegrella'
      /> */}
      <ProjectCard
        mockImg={dwylcoMock}
        bgImg='https://images.unsplash.com/photo-1557682233-43e671455dfa'
        imgAlt='dwylco'
        title='DWYLCO'
        description='A community platform for creatives to find jobs and join conversations about topics that interest them. [In progress]'
        demoLink='https://github.com/jakegrella/dwylco-app'
        gitHubLink='https://github.com/jakegrella/dwylco-app'
      />
      <ProjectCard
        mockImg={expatLogMock}
        bgImg='https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3'
        imgAlt='the expat log'
        title='The Expat Log'
        description='A social media network MVP designed to allow nomads and expats to share their experiences as they travel.'
        demoLink='https://expatlog-72l1rva6o.vercel.app/'
        gitHubLink='https://github.com/Expat-Journal-Log'
      />
      <ProjectCard
        mockImg={portfolioMock}
        bgImg='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
        imgAlt='portfolio site'
        title='This Portfolio'
        description='This site used to showcase my work.'
        demoLink='https://jakegrella.com'
        gitHubLink='https://github.com/jakegrella/devport-cra'
      />
    </section>
  );
}
