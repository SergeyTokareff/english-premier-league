import styled, { css } from "styled-components";

/* ========== LAYOUT ========== */

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TableContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 40px 0 60px;
`;

export const TableTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 600;
`;

export const TableGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ========== ROW ========== */

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px 40px 40px 40px 48px 48px 48px 48px;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  opacity: 0.8;
  padding: 16px 8px;
  border-radius: 12px;
  background: #3b0f4d;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px 40px 40px 40px 48px 48px 48px 48px;
  align-items: center;

  background: ${({ position }) => {
    if (position <= 4) return "rgba(34, 197, 94, 0.15)";
    if (position <= 6) return "rgba(59, 130, 246, 0.15)";
    if (position >= 18) return "rgba(239, 68, 68, 0.15)";
    return "transparent";
  }};
  border-radius: 8px;
  padding: 8px;
  font-weight: 500;

  transition:
    background 0.15s,
    transform 0.1s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: ${({ isHeader }) => (isHeader ? "none" : "scale(1.01)")};
  }
`;

/* ========== CELL ========== */
export const HeaderCell = styled.div`
  display: grid;
  justify-self: ${({ justifyStart }) => (justifyStart ? "start" : "center")};
  ${({ justifyStart }) =>
    justifyStart &&
    `
      padding-left: 8px;
  `}
`;

export const Cell = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  justify-self: ${({ justifyStart }) => (justifyStart ? "start" : "center")};
  padding: 6px 8px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const TeamCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
`;
