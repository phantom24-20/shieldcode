import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: linear-gradient(to right, #0a0a0a, #1a1a1a);
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-family: 'Monoton', cursive;
  font-size: 24px;
  color: #fff;
  background: linear-gradient(45deg, #ffb033, #ff69b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  color: #ccc;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ffb033;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #ffb033;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => (
  <Nav>
    <LogoLink to="/">
      <Logo>Shield Code</Logo>
    </LogoLink>
    <NavLinks>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavLinks>
  </Nav>
);

export default Navbar;
