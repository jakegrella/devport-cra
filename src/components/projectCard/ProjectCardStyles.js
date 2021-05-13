import styled from 'styled-components';

const StyledProjectCard = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
  margin-bottom: 5rem;
  .img-container {
    position: relative;
    width: 50rem;
    height: 40rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .bg {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .mock {
      position: absolute;
      height: 70%;
      object-fit: contain;
    }
  }
  .project-card-words {
    /* border: 1px solid red; */
    display: flex;
    flex-flow: column nowrap;
    width: 40%;
    margin-left: 5rem;
    h3 {
      margin-bottom: 1rem;
    }
    .link-stack-container {
      display: flex;
      flex-flow: row wrap;
      h4 {
        margin-bottom: 0.5rem;
      }
      svg {
        color: ${(pr) => pr.theme.black};
        margin-right: 1rem;
      }
      .links {
        /* border: 1px solid green; */
        margin-right: 4rem;
        svg:hover {
          color: ${(pr) => pr.theme.babyBlue};
        }
      }
      .tech {
        /* border: 1px solid red; */
        margin-bottom: 1rem;
      }
    }
  }
  @media (max-width: ${(pr) => pr.theme.tablet}) {
    /* border: 1px solid green; */
    flex-flow: column nowrap;
    align-items: center;
    .project-card-words {
      width: 100%;
      margin-left: 0;
    }
    .inactive {
      display: none;
    }
    .active {
    }
  }
`;

export default StyledProjectCard;
