import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';

export default function HomePage() {
  return (
    <StyledHomePage>
      <section>
        <h3>bio</h3>
        <p>
          Hey and thanks for visiting my small corner of the internet. I'm a
          software developer with a dedication to good product design and an
          interest in business and education systems. I enjoy brainstorming new
          ideas and then building them. I love working on projects that help
          people, and if you or your company does that then I'd love to talk.
        </p>
        <br />
        <p>
          I'm passionate about many things, including education & coaching,
          climate tech & electric vehicles, cryptocurrency, and photography. I
          think well-written code, good design, and a strong business model can
          go a really long way.
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
            <p>
              👷‍♂️ working on: <a href='http://waterpolo.co/'>waterpolo.co</a>
            </p>
          </li>
          <li>
            <p>
              💡 interested in: education and coaching, it’s effects on the
              success of young people, and how we can maximize the benefits of
              good instruction
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
          <li>
            <a
              href='https://youtu.be/TGO-CAImUeY'
              target='_blank'
              rel='noreferrer'>
              Jon Bellion - The Making Of Guillotine
            </a>
          </li>
        </ul>
      </section>
    </StyledHomePage>
  );
}
