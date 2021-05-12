import styled from 'styled-components';

const StyledDesktopNav = styled.header`
  display: flex;
  flex-flow: row nowrap;

  a {
    margin-left: 1.5rem;
    font-weight: 600;
    text-decoration: none;
  }
  .icons {
    margin-top: 0.25rem;
  }
`;

export default StyledDesktopNav;
