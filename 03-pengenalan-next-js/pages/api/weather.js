export default async function handler(req, res) {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const city = req.query.city || "Malang";
  
    if (!API_KEY) return res.status(500).json({ error: "API Key tidak ditemukan" });
  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      res.status(response.ok ? 200 : response.status).json(data);
    } catch {
      res.status(500).json({ error: "Terjadi kesalahan dalam mengambil data" });
    }
  }
  