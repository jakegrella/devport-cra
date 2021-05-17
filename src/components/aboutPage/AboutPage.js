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
          <h2>hey, I'm Jake</h2>
          <p>
            I often debate with myself about who I am. What defines me? What my
            perfect day would look like? I’m not exactly sure why I do this, but
            I think it has something to do with wanting to be successful and
            making a difference, whatever that may mean. Life is constantly
            evolving, making it difficult to find the right words to create a
            summary of my journey thus far. Nonetheless, this is me.
          </p>
          <p>
            I grew up moving quite a bit in my childhood, playing various
            sports, spending a lot of my time outdoors getting hurt. I went to
            Carl Sandburg High School and spent my four years on the swim and
            water polo teams while focusing entirely too much on a girl.
            Sandburg is a relatively wealthy public high school in a community
            where the average household income is over $90,000 a year, which
            allows students to receive tons of resources to help them succeed,
            including guidance counselors, social workers, and in-school college
            info sessions. The problem I found myself in was that: 1) I didn’t
            know many of these resources existed, 2) I was neither a standout
            nor a struggling student, and 3) I didn’t know I should care about
            my options. 
          </p>
          <p>
            A majority of school resources are used to get the best and
            brightest to the next level or to help those that are struggling
            academically fix their situation. But for the middle 50% of students
            like me, that means going through the system relatively unnoticed.
            On top of that, I didn’t have the awareness to worry about what I
            was going to do with my future until it was practically too late. 
          </p>
          <p>
            I was never the all-star athlete of my high school teams, but that
            didn’t change the duration or intensity of the practices I attended.
            We trained for at least two hours a day, five days a week, for the
            six months that came before swim season, and often spent over five
            hours a day, six days a week, at the pool during the two and a half
            month season. This leads straight into water polo, leaving just the
            month of August for us to take a break. The amount of time that I
            spent perfecting my craft as an athlete made me understand things
            like time management, focus, and drive at a higher level than I
            probably would have ever thought possible if it were not for these
            athletic programs. I also feel that having a coach that was just as
            dedicated to the sports as I was helped me continually work to be my
            best.
          </p>
          <p>
            Finding coaches that care about aiding in the development of
            well-rounded individuals should be a necessity. Every student has
            encountered a teacher or coach that is not there to inspire, but
            rather to be a well-paid supervisor. This type of person is a
            negative influence on the youth in the United States. I think that
            having someone like a coach to look up to, respect, and emulate is
            vital for young adults. More on this a bit later.  
          </p>
          <p>
            I believe the athletics systems and elective options where I went to
            high school were exceptionally beneficial to the student body. I
            presume this is not common at most high schools, but where I went
            there was an abundance of interesting electives for students to
            take. I was able to, and did, take classes including computer-aided
            design, computer networking, graphic design, even an intro to
            computer science. Oftentimes these electives can be taught in a more
            engaging manner, and the ability for students to peek into different
            areas that interest them seems super intuitive and should be a more
            common theme. 
          </p>
          <p>
            Neither of my parents had gone to college and by the time senior
            year of high school rolled around I had gone on a single college
            visit to the University of Wisconsin Madison where the yearly cost
            was over $60,000 a year for an out-of-state student. This made me
            second guess my options because I didn’t know enough and I thought
            all universities would be this expensive. I knew I wasn’t going to
            be recruited for swim or water polo, and even though I took lots of
            electives, I was unsure of how I wanted to spend the majority of the
            next 45 years of my life.
          </p>
          <p>
            I decided, half by choice and half by lack of opportunities due to
            my negligence, to enroll at my local community college. Luckily, I
            lived in the district of a top ten Illinois community college
            (Moraine Valley), and I spent my first year after high school
            completing my gen-eds (which I think are very futile and only exist
            to make money for universities) trying to figure out what I wanted
            to do. I did find my passion for photography, and I enjoyed the
            creativity and freedom that it allowed. I’m still working with the
            same model Nikon I was gifted for my high school graduation.
            However, the stigma of going to a community college still exists
            after you graduate and attend your local school, and it pushed me to
            prematurely leave before I knew what I wanted. When all of your
            friends ask you what you’re doing and you say, “Just going to
            community college," it makes you want to get out of there. So many
            high school students feel like community college is not an option or
            a last resort, when in reality it’s often a great education at a
            fraction of the cost.
          </p>
          <p>
            I left Moraine Valley Community College in pursuit of what I thought
            I wanted: an architecture degree from the University of Illinois at
            Chicago (UIC). I loved and still do enjoy dissecting problems within
            a community, bringing beautiful designs to life, and the synthesis
            of art and engineering. However, after a year in the program, and
            after researching the job market info, I determined this was not
            what I wanted. I switched to the UIC business school while I
            pondered my options.
          </p>
          <p>
            I ended up becoming fascinated with the intricacies of business and
            decided to pursue a freelance photography business for myself while
            I finished my degree. I had photos published in blogs, did work for
            small businesses, and was even able to work as the photographer at
            Sandburg for their senior athletic photos. I learned a ton from this
            endeavor, and I think pursuing a passion early is something everyone
            should try if they can.
          </p>
          <p>
            However, as I finished my degree I realized I wanted something more.
            My photography business was fun but it was not fulfilling me. I was
            yearning for something more technically difficult. I remembered how
            much I loved my high school electives and how challenging but
            rewarding computer science was for me. I did some research and
            almost went back to UIC for a bachelor of computer science. Then I
            saw one of the now well-known Lambda School “don’t pay anything
            until you’re hired” ads. Fast forward, and Lambda School was a great
            six-month curriculum that taught me a ton about full-stack web
            development. We focused on newer technologies that I know I would
            not have been taught at a university while keeping the emphasis on
            becoming career-ready.
          </p>
          <p>
            I still don’t know if Lambda School was the right decision, as I am
            still looking for a job building software, but it did allow me to
            chase my passion. I do love to code and build and create and the
            skills I’ve learned from Lambda School have allowed me to do that.
            Is my knowledge of software as in-depth as someone who went through
            a four-year program that focuses heavily on theory and math? Of
            course not. But I can build real applications that can help people,
            and I am continually going back and filling in the gaps in my
            knowledge. 
          </p>
          <p>
            Most importantly though, spending the last 5 years figuring out what
            interests me and what is important to me has allowed me a sense of
            clarity. My life is still far from perfect, but I know what I want
            and I have a pretty good idea of how I’m going to get there.
          </p>
          <p>
            I spend my days working in a software-related capacity. Until I find
            a job, this means splitting my time between applying for positions
            like crazy and perfecting all of the personal projects on my
            portfolio. I try not to start new projects until the previous is
            done, but I often find it difficult to call a project “finished”. I
            also spend time learning computer science-related material on the
            weekends.
          </p>
          <p>
            After this, I spend my evenings coaching the junior varsity water
            polo team at the same high school I attended. After polo ends, I
            stay at that same pool and coach an age group swim team. I also have
            started planning the creation of a club water polo team that feeds
            into Sandburg. I have seen first-hand what both good and bad
            coaching can do for a team and its athletes, and I love the
            responsibility I have to help develop the people that train on the
            teams I am a part of.
          </p>
          <p>
            Every time I walk on the pool deck to coach, whether it be a high
            school water polo player or a six-year-old swimmer, I know that
            every interaction I have with them is going to have an impact on
            their life. Most of them will forget the hellos and goodbyes, the
            practices where we had a ton of fun or the days where I had to get
            on them about their level of effort. However, I feel that overall,
            each athlete I coach will remember the overall experience they had
            when I coached them and that it will have an influence on how they
            lead their life. 
          </p>
          <p>
            My experiences have led me to have a real interest in education
            systems, with a specific intrigue in where the United States is
            falling short. I believe that many of the problems America faces can
            be solved with a bit of money and an emphasis on education. Creating
            a curriculum for the average student hinders the success of outliers
            on either end, especially when the support resources are built for
            those outliers (curriculum and support resources do not align).
            Allowing students to take specialized classes that interest them,
            push them, and allow them to grow, while making sure they have the
            resources to succeed, sounds like a more successful model. To me,
            the disparity that exists in education across this country is
            unacceptable, and I would like to be part of the solution that
            changes that.
          </p>
          <p>Oh, and I think my perfect day would go something like this:</p>
          <p>
            Wake up around six and check on my family. Take my dog out and then
            take my jet ski to a local coffee shop on the water. Oh, and I own
            it. I bring the coffee back home and make a quick breakfast for
            everyone. I lead a relatively small internet business that is making
            real changes in the education industry. Most of our employees are
            remote but we still have a nice, small office in the trendy part of
            town. Again, take the jet ski into work around seven and spend my
            time looking into new ideas, talking to clients, getting hands-on
            with the code, and making sure my team is happy. Most days, four
            rolls around and I’m out. Maybe a couple of days I stay late, but
            balance is important to me and is how I succeed. Head home to work
            out, then make dinner and spend the rest of the night with family or
            friends. Maybe I coach swim or water polo as well. I definitely take
            the jet ski to practice. Go to bed and do it again, because this is
            the life I chose and the life I’ve always dreamed of.
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
