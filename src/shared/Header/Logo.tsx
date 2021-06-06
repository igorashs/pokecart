import styled from 'styled-components';
import logo from './logo.png';

const StyledLogo = styled.div`
  display: flex;
  gap: 1rem;

  font-weight: 700;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  span {
    text-decoration: underline;
  }
`;

const Red = styled.span`
  color: ${({ theme }) => theme.dangerTextColor};
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="PokeCart Logo" />
      <span>
        <Red>Poke</Red>Cart
      </span>
    </StyledLogo>
  );
};

export default Logo;
