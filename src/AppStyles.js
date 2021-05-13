import styled from 'styled-components';

const StyledApp = styled.div`
  /* border: 1px solid blue; */
  padding: 5rem 2rem;
  max-width: 120rem;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  p,
  a {
    color: ${(pr) => pr.theme.black};
  }
  h1 {
    font-size: 3.6rem;
    font-weight: 600;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  p,
  a {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.3;
  }
  a {
    text-decoration: underline;
    &:hover {
      color: ${(pr) => pr.theme.highlighterOrange};
    }
  }

  button {
    font-size: 1.8rem;
    font-weight: 600;
  }
  svg {
    font-size: 1.8rem;
    &:hover {
      color: ${(pr) => pr.theme.highlighterOrange};
    }
  }
`;

export default StyledApp;
