import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.75rem;
  height: 7rem;

  background-color: ${({ theme }) => theme.primaryColor};
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
