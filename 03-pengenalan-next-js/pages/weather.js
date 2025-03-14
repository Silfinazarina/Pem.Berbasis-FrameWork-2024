import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);

    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <h1><strong>Cek Cuaca</strong></h1>
      <br/>
      <input
        type="text"
        placeholder="Masukkan nama kota"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Memuat..." : "Cari Cuaca"}
      </button>

      {weather && weather.main ? (
        <div>
          <br/>
          <h2>Cuaca di <strong>{weather.name}</strong></h2>
          <p><strong>Suhu:</strong> {weather.main.temp}°C</p>
          <p><strong>Kecepatan Angin:</strong> {weather.wind.speed} m/s</p>
          <p><strong>Kondisi:</strong> {weather.weather[0].description}</p>
        </div>
      ) : (
        weather?.error && <p style={{ color: "red" }}>Error: {weather.error}</p>
      )}
    </div>
  );
}