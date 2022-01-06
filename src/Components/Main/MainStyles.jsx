import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    padding: 10px;
    border-bottom: 1px solid #999;
`

export const ImgContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
    }
`

export const InformacionClimatica = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Grados = styled.h2`
    color: #fff;
    font-size: 32px;
`

export const City = styled.h1`
    color: #fff;
`

export const Informacion = styled.p`
    color: #fff;

    // Menor a 350px de ancho
    @media (max-width: 350px){
        font-size: 14px;
    }
    // Si es mayor a 350px queda el tamaño por defecto: 16px
`