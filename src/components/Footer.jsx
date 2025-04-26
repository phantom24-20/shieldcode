import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #111, #1a1a1a);
  color: #fff;
  padding: 30px 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #222;
`;

const FooterTop = styled.div`
  margin-bottom: 16px;
  text-align: center;
  max-width: 600px;
`;

const Brand = styled.h3`
  font-size: 18px;
  color: #ff8a00;
  margin-bottom: 4px;
`;

const FooterText = styled.p`
  font-size: 13px;
  color: #aaa;
  line-height: 1.4;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  font-size: 13px;
  position: relative;
  padding-bottom: 2px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #ff8a00;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  max-width: 600px;
  padding-top: 10px;
  border-top: 1px solid #222;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Brand>Shield Code Technologies</Brand>
        <FooterText>Your trusted digital partner</FooterText>
      </FooterTop>

      <FooterLinks>
        <FooterLink to="/terms">Terms & Conditions</FooterLink>
        <FooterLink to="/privacy">Privacy Policy</FooterLink>
        <FooterLink to="/company-policy">Company Policy</FooterLink>
        <FooterLink to="/contact">Contact Us</FooterLink>
      </FooterLinks>

      <FooterBottom>
        © {new Date().getFullYear()} Shield Code Technologies. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
