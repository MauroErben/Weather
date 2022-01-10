import React from "react";
import { InformacionClimatica, Main, ImgContainer } from "./MainStyles";
import { City, Informacion, Grados } from "./MainStyles";

const WeatherMain = ({ obj_clima }) => {

    if (Object.keys(obj_clima).length <= 0) return <Main><Informacion>Cargando...</Informacion></Main>

    const { id, name, weather } = obj_clima;
    const { temp, humidity, feels_like } = obj_clima.main;
    const { speed } = obj_clima.wind;
    const { country } = obj_clima.sys;

    return <Main>{weather.map((clima) => (
        <React.Fragment key={id}>
            <City>{name}, {country}</City>
            <Informacion>{clima.description.charAt(0).toUpperCase() + clima.description.slice(1)}</Informacion>
            <ImgContainer>
                <img src={`http://openweathermap.org/img/w/${clima.icon}.png`} />
            </ImgContainer>
            <InformacionClimatica>
                <Informacion>Humedad: {humidity}%</Informacion>
                <Grados>{Math.round(temp)}°C</Grados>
                <Informacion>Viento: {Math.round(speed)} km/h</Informacion>
            </InformacionClimatica>
            <Informacion>Sensación térmica: {Math.round(feels_like)}°C</Informacion>
        </React.Fragment>
    ))}</Main>
}
export default WeatherMain;