import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Path query required" });
  }

  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/${path}`,
      {
        headers: {
          "X-Auth-Token": process.env.VITE_FOOTBALL_API_KEY,
        },
      }
    );

    // Додаємо CORS заголовок, щоб браузер міг отримати відповідь
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    return res.status(500).json({ error: "Proxy fetch failed" });
  }
}
