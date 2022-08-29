import { NavStyled, NavLinkStyled } from './StyledComponents';

export const Navbar = () => {
  return (
    <NavStyled>
      <NavLinkStyled to='/'>Home</NavLinkStyled>
      <NavLinkStyled to='/series'>Series</NavLinkStyled>
    </NavStyled>
  );
};
