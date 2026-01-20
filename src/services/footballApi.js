import axios from 'axios';

/**
 * Отримати турнірну таблицю Англійської Премʼєр-ліги
 */
export const getStandings = async () => {
  try {
    const response = await axios.get('/api/proxy', {
      params: { path: 'competitions/PL/standings' }
    });

    return response.data.standings[0].table;
  } catch (error) {
    console.error('Error fetching standings:', error);
    throw error;
  }
};

/**
 * Отримати матчі Англійської Премʼєр-ліги
 */
export const getMatches = async () => {
  try {
    const response = await axios.get('/api/proxy', {
      params: { path: 'competitions/PL/matches' }
    });

    return response.data.matches;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};
