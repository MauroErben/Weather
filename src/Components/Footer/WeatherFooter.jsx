import React from 'react';
import { Footer } from './FooterStyles';
import { FooterInformacion } from './FooterStyles';

const WeatherFooter = ({ fecha }) => {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    return (
        <Footer>
            <FooterInformacion>{dia}/{mes}/{año} | {hora}:{minutos}</FooterInformacion>
            <FooterInformacion>(C) 2022 Mauro Erben.</FooterInformacion>
        </Footer>
    )
}
export default WeatherFooter;