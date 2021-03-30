import styled from 'styled-components';

const StyledMobileNav = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #fff;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  a {
    font-size: 3rem;
    padding: 5rem 25%;
  }
  @media (max-width: ${(pr) => pr.theme.tablet}) {
    .mobile-nav a {
      display: none;
    }
  }
`;

export default StyledMobileNav;
