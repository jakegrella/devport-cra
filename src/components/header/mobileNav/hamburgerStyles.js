import styled from 'styled-components';

const StyledHamburger = styled.header`
  .hamburger {
    position: absolute;
    top: 6rem;
    right: 2rem;
    z-index: 2;
    border: none;
    background: none;
    h2 {
      font-weight: 700;
      font-size: 3.6rem;
    }
    cursor: pointer;
  }
`;

export default StyledHamburger;
