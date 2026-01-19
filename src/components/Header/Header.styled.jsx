import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
