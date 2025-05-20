async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '916e31fb5f279fae50b1c6d8778f1c7b';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherResult').innerHTML = weatherInfo;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found or API error: ${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Network error. Check console.</p>`;
    console.error(error);
  }
}
