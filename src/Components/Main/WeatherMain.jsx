import React from "react";
import { InformacionClimatica, Main, ImgContainer } from "./MainStyles";
import { Informacion } from "./Informacion";
import { Grados } from "./Grados";
import { City } from "./City";

const WeatherMain = ({ obj_clima }) => {

    if (Object.keys(obj_clima).length > 0) {
        const { id, name, weather } = obj_clima;
        const { temp, humidity, feels_like } = obj_clima.main;
        const { speed } = obj_clima.wind;
        const { country } = obj_clima.sys;

        return (
            <>
                {weather.map((clima) => (
                    <Main key={id}>
                        <City texto={`${name}, ${country}`} />
                        <Informacion texto={`${clima.description.charAt(0).toUpperCase() + clima.description.slice(1)}`} />
                        <ImgContainer>
                            <img src={`http://openweathermap.org/img/w/${clima.icon}.png`} />
                        </ImgContainer>
                        <InformacionClimatica>
                            <Informacion texto={`Humedad ${humidity}%`} />
                            <Grados texto={`${Math.round(temp)}°C`} />
                            <Informacion texto={`Viento: ${Math.round(speed)} km/h`} />
                        </InformacionClimatica>
                        <Informacion texto={`Sensación térmica: ${Math.round(feels_like)}°C`} />
                    </Main>
                ))}
            </>
        )
    } else {
        return (
            <Main>
                <Informacion texto={`Cargando...`} />
            </Main>
        )
    }
}
export default WeatherMain;


