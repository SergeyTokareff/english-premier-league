import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 36px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;

  border-bottom: 2px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s;

  &.active {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
