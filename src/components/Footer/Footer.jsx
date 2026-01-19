import {
  FooterContainer,
  FooterCopyright,
  FooterLogo,
  FooterWrapper,
} from "./Footer.styled";
import icon from "../../assets/svg/logo-footer.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>&copy; 2026 Premier League</FooterCopyright>
        <FooterLogo>
          <img src={icon} alt="Logo Premier League" />
        </FooterLogo>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
