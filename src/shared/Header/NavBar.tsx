import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const UL = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    a {
      font-size: 1.75rem;
      text-decoration: none;
    }
  }
`;

const NavBar: React.FC = () => {
  return (
    <UL>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/store">Store</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </UL>
  );
};

export default NavBar;
