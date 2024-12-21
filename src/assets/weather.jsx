import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '95d3da26353f4336931125942241907'; 
  const API_URL = 'https://api.weatherapi.com/v1/current.json';

  useEffect(() => {
    const fetchWeatherByLocation = async (latitude, longitude) => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: `${latitude},${longitude}`,
          },
        });
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByLocation(latitude, longitude);
          },
          (err) => {
            setError('Failed to get location');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser');
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  if (loading) {
    return (
        <div className='loading'><p>Loading weather...</p></div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (weatherData) {
    return (
      <div className="weather-container">
        <h2>Weather in {weatherData.location.name}<span className="blinking-colon">:</span></h2>
        <p>Temperature: {weatherData.current.temp_c}°C</p>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
      </div>
    );
  }

  return null;
};

export default Weather;
