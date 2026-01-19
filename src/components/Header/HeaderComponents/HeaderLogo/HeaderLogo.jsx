import { HeaderLogoWrapper, LogoIcon, Link } from "./HeaderLogo.styled";

import icon from "../../../../assets/svg/logo.svg";

const HeaderLogo = () => {
  return (
    <HeaderLogoWrapper>
      <Link to="/">
        <LogoIcon src={icon} alt="EPL logo" />
      </Link>
    </HeaderLogoWrapper>
  );
};

export default HeaderLogo;
