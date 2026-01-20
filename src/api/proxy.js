// src/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { path } = req.query; // path передаємо з фронтенду

    if (!path) {
      return res.status(400).json({ error: 'Missing path parameter' });
    }

    const url = `https://api.football-data.org/v2/${path}`;

    const response = await axios.get(url, {
      headers: {
        'X-Auth-Token': process.env.VITE_FOOTBALL_API_KEY
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
