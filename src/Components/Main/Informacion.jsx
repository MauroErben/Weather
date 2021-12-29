import React from "react";
import { InformacionStyled } from "./MainStyles";

export const Informacion = ({ texto }) => {
    return (
        <InformacionStyled>{texto}</InformacionStyled>
    )
}