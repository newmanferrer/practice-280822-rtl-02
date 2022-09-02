import { NavStyled, NavLinkStyled } from './StyledComponents';

export const Navbar = () => {
  return (
    <NavStyled>
      <NavLinkStyled to='/'>Home</NavLinkStyled>
      <NavLinkStyled to='/series'>Series</NavLinkStyled>
      <NavLinkStyled to='/example2'>Example2</NavLinkStyled>
      <NavLinkStyled to='/example3'>Example3</NavLinkStyled>
    </NavStyled>
  );
};
