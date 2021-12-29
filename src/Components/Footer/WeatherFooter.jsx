import React from 'react';
import { Footer } from './FooterStyles';
import { FooterInformacion } from './FooterInformacion';

const WeatherFooter = ({ fecha }) => {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    return (
        <Footer>
            <FooterInformacion texto={`Última actualización: ${dia}/${mes}/${año} | ${hora}:${minutos}`} />
            <FooterInformacion texto={`(C) 2022 Mauro Erben.`} />
        </Footer>
    )
}
export default WeatherFooter;