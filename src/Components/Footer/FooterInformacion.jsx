import React from "react";
import { FooterInformacionStyled } from "./FooterStyles";

export const FooterInformacion = ({ texto }) => {
    return (
        <FooterInformacionStyled>{texto}</FooterInformacionStyled>
    )
}