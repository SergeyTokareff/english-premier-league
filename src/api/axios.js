import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Path is required" });
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

    // Додаємо CORS-заголовки
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy fetch failed:", error.response?.data || error.message);
    return res.status(500).json({ error: "Proxy fetch failed" });
  }
}
