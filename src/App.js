import './App.css';
import React, { useEffect, useState, useRef } from "react";
import WeatherHeader from "./Components/Header/WeatherHeader";
import WeatherMain from './Components/Main/WeatherMain';
import WeatherFooter from './Components/Footer/WeatherFooter';
import { WeatherAppContainer } from './Components/WeatherAppStyles';
import { getWeatherFromCoords, getWeatherFromCity } from './Components/Api/WeatherApi';

function App() {

  const [clima, setClima] = useState({});
  const [fecha, setFecha] = useState(new Date());
  const cityRef = useRef();

  const setWeather = (weather) => {
      setClima(weather);
      setFecha(new Date());
      cityRef.current.value = null;
  }

  const success = async (pos) => {
    const crd = pos.coords;
    const weather = await getWeatherFromCoords(crd.latitude, crd.longitude);
    setWeather(weather);
  }

  const error = (err) => {
    alert(`[ERROR]: ${err.message}`);
  }

  const handleUpdate = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  const handleSearch = async () => {
    const city = cityRef.current.value;
    if (city === "") return;
    const weather = await getWeatherFromCity(city);
    weather.cod === '404' ? alert(weather.message) : setWeather(weather);
  }

  useEffect(() => {
    handleUpdate();
  }, [])

  return (
    <WeatherAppContainer>
      <WeatherHeader referencia={cityRef} onUpdate={handleUpdate} onSearch={handleSearch} />
      <WeatherMain obj_clima={clima} />
      <WeatherFooter fecha={fecha} />
    </WeatherAppContainer>
  );
}
export default App;
