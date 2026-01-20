import {
  FooterContainer,
  FooterCopyright,
  FooterLogo,
  FooterWrapper,
  Link
} from "./Footer.styled";
import icon from "../../assets/svg/logo-footer.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>&copy; 2026 Premier League</FooterCopyright>
        <Link to='/'>
          <FooterLogo>
            <img src={icon} alt="Logo Premier League" />
          </FooterLogo>
        </Link>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
