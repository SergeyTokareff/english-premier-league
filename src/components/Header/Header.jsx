import HeaderLogo from './HeaderComponents/HeaderLogo/HeaderLogo'
import Navbar from "./HeaderComponents/Navbar/Navbar"

import { HeaderWrapper, HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo />
        <Navbar />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
