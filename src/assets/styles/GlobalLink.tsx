import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link) <{ underline?: boolean }>`
  font-weight: 400;
  color: #333;
  margin-top: 15px;
  align-self: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  :hover {
    color: #15C7CF;
  }
`;

export default NavLink;
