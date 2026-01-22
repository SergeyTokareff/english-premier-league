import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/api/apiHandler", async (req, res) => {
  try {
    const { path } = req.query;
    const response = await axios.get(
      `https://api.football-data.org/v4/${path}`,
      {
        headers: {
          "X-Auth-Token": process.env.VITE_FOOTBALL_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Local proxy error" });
  }
});

const PORT = 5173;
app.listen(PORT, () => console.log(`Proxy running on :${PORT}`));
