import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Wrapper, Content } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
