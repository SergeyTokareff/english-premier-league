import api from './axios'

/**
 * Отримати турнірну таблицю Англійської Премʼєр-ліги
 */
export const getStandings = async () => {
  try {
    const response = await api.get('/competitions/PL/standings')

    // Беремо тільки таблицю (без зайвих даних)
    return response.data.standings[0].table
  } catch (error) {
    console.error('Error fetching standings:', error)
    throw error
  }
}

/**
 * Отримати матчі Англійської Премʼєр-ліги
 */
export const getMatches = async () => {
  try {
    const response = await api.get('/competitions/PL/matches')

    // Дані матчів
    return response.data.matches
  } catch (error) {
    console.error('Error fetching matches:', error)
    throw error
  }
}
