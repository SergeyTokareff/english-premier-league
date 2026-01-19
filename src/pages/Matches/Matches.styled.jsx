import styled from "styled-components";

export const MatchesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MatchesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0 60px;
`;

export const MatchesTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 600;
`;

export const MatchdaySection = styled.section`
  margin-bottom: 12px;
`;

export const MatchdayTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 14px;
  font-weight: 600;
`;

export const DateGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const DateHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.md} 0;
  scroll-behavior: smooth;
`;

export const MatchCard = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  padding: 18px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Team = styled.div`
  flex: 1;
  text-align: ${({ side }) => (side === "left" ? "right" : "left")};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const Score = styled.div`
  flex: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;
export const MatchdayNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  gap: 10px;
`;

export const NavButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const MatchdayLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;
