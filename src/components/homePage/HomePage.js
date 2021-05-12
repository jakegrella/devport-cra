import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';
import ProjectCard from '../projectCard/ProjectCard';
import lanMock from '../../assets/lan-mock.png';

export default function HomePage() {
  return (
    <StyledHomePage>
      <section>
        <h3>bio</h3>
        <p>
          Hey and thanks for visiting my small corner of the internet. I'm a
          software developer with a passion for good product design and
          business. I enjoy brainstorming new ideas and then building them. I
          love working on projects that help people, and if you or your company
          does that then I'd love to talk.
        </p>
        <br />
        <p>
          I'm passionate about many things, including education & coaching,
          climate tech & electric vehicles, and photography. I think
          well-written code, good design, and a strong business model can go a
          really long way.
        </p>
        <br />
        <p>
          You can read a bit more about me on my{' '}
          <Link to='/about'>about page</Link>.
        </p>
      </section>
      <br />
      <section>
        <h3>currently</h3>
        <ul>
          <li>
            <p>📍 living in: Chicago, IL (suburbs)</p>
          </li>
          <li>
            <p>👷‍♂️ working on: waterpolo.co</p>
          </li>
          <li>
            <p>
              💡 interested in: education/ coaching and it’s effects on the
              success of young people,{' '}
            </p>
          </li>
          <li>
            <p>📚 reading: Atomic Habits by James Clear</p>
          </li>
        </ul>
      </section>
      <br />
      <section>
        <h3>my work</h3>
        <ul>
          <li>
            <a
              href='https://main.d37zm5ayhfot8q.amplifyapp.com/'
              target='_blank'
              rel='noreferrer'>
              waterpolo.co
            </a>
          </li>
          <li>
            <a
              href='https://main.d37zm5ayhfot8q.amplifyapp.com/'
              target='_blank'
              rel='noreferrer'>
              lambda alumni network
            </a>
          </li>
          <li>
            <Link to='/work'>view more</Link>
          </li>
        </ul>
      </section>
      <br />
      <section>
        <h3>resources</h3>
        <p>
          a list of materials that I reference often and have either inspired,
          pushed, or changed me
        </p>
        <ul>
          <li>
            <a
              href='https://www.youtube.com/channel/UCMwo6hT5hI3R56rO2HYP-wQ'
              target='_blank'
              rel='noreferrer'>
              James Scholz's Youtube Channel
            </a>
          </li>
          <li>
            <a
              href='http://www.girlsgonechild.net/2014/05/maya-angelou-on-writing-life.html'
              target='_blank'
              rel='noreferrer'>
              Excerpt From a Maya Angelou Interview
            </a>
          </li>
          <li>
            <a
              href='https://www.audible.com/pd/Cant-Hurt-Me-Audiobook/B07KKMNZCH'
              target='_blank'
              rel='noreferrer'>
              Can't Hurt Me By David Goggins
            </a>
          </li>
          <li>
            <a
              href='https://open.spotify.com/show/3mliji9352UAk3XnWElnDV?si=N3OiQR59R0WVVXF-1lUiSg'
              target='_blank'
              rel='noreferrer'>
              The My First Million Podcast
            </a>
          </li>
        </ul>
      </section>
      {/* <br />
      <section>
        <h3>some of my very talented friends</h3>
        <ul>
          <li>
            <a
              href='https://www.robcvazquez.com/'
              target='_blank'
              rel='noreferrer'>
              Roberto Vazquez
            </a>
          </li>
        </ul>
      </section> */}
      {/* <div className='home-banner'>
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
        <ProjectCard
          imgURL='https://images.unsplash.com/photo-1557683325-3ba8f0df79de'
          imgAlt='townsquare'
          title='Townsquare'
          description='A platform for citizens to make their voices heard on the issues they would like to see resolved in their community.'
          demoLink='https://jakegrella.com'
          gitHubLink='https://github.com/jakegrella'
        />
        <Link to='/work' className='all-projects-btn'>
          view more work
        </Link>
      </section>
      <section className='get-in-touch'>
        <a href='mailto:jake@jakegrella.com'>Get in touch.</a>
        <p>
          I currently live in Chicago, IL, and I am looking for remote work, but
          I am interested in relocating if it means I am part of something
          important or impactful.
        </p>
      </section> */}
    </StyledHomePage>
  );
}
