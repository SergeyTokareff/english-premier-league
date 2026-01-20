import api from './axios'

/**
 * Отримати турнірну таблицю Англійської Премʼєр-ліги
 */
export const getStandings = async () => {
  const response = await fetch(
    `/api/football?path=competitions/PL/standings`
  );
  const data = await response.json();
  return data.standings[0].table;
}

/**
 * Отримати матчі Англійської Премʼєр-ліги
 */
export const getMatches = async () => {
  const response = await fetch(
    `/api/football?path=competitions/PL/matches`
  );
  const data = await response.json();
  return data.matches;
}
