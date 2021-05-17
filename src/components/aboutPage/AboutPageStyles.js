import styled from 'styled-components';

const StyledAboutPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  .about-top {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 0 15rem 0;
    .about-top-imgAndLinks {
      display: flex;
      flex-flow: column nowrap;
      img {
        width: 35rem;
        margin: 0 0 1rem 0;
      }
      .about-top-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        a {
          color: ${(pr) => pr.theme.black};
        }
      }
    }
    .about-top-words {
      display: flex;
      flex-flow: column nowrap;
      width: 60%;
      p {
        line-height: 1.2;
        margin-bottom: 1rem;
      }
    }
  }
  .about-bottom {
    display: flex;
    flex-flow: row nowrap;
    h3 {
      font-size: 4.8rem;
    }
    .about-bottom-apiBlurbs {
      margin: 0 0 0 2rem;
      a {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        border: 2px solid ${(pr) => pr.theme.black};
        border-radius: 2rem;
        padding: 0.5rem 1rem;
        margin: 2rem 0 0 0;
        &:hover {
          border: 2px solid ${(pr) => pr.theme.highlighterOrange};
        }
      }
    }
  }
  @media (max-width: ${(pr) => pr.theme.tablet}) {
    .about-top {
      flex-flow: column nowrap;
      align-items: center;
      .about-top-imgAndLinks {
        margin-bottom: 2rem;
        img {
          width: 100%;
        }
      }
      .about-top-words {
        width: 100%;
      }
    }
  }
`;

export default StyledAboutPage;
