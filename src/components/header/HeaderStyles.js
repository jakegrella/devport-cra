import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15rem 0;
  img {
    width: 20rem;
  }

  // 768 and up
  @media (min-width: ${(pr) => pr.theme.tablet}) {
    .header {
      margin-bottom: 5rem;
    }
    .hamburger {
      display: none;
    }
  }

  // 768 and below
  @media (max-width: ${(pr) => pr.theme.tablet}) {
    .desktop {
      display: none;
    }
  }
`;

export default StyledHeader;
