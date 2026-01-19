import { Nav, StyledLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/table">Table</StyledLink>
        </li>
        <li>
          <StyledLink to="/matches">Matches</StyledLink>
        </li>

        <li>
          <StyledLink to="/statistics">Statistics</StyledLink>
        </li>
        <li>
          <StyledLink to="/news">News</StyledLink>
        </li>
        <li>
          <StyledLink to="/transfers">Transfers</StyledLink>
        </li>
        <li>
          <StyledLink to="/players">Players</StyledLink>
        </li>
        <li>
          <StyledLink to="/clubs">Clubs</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
