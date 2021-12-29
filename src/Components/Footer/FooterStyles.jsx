import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const FooterInformacionStyled = styled.p`
    color: #fff;
    font-size: 15px;
    
     // Menor a 350px de ancho
     @media (max-width: 350px){
        font-size: 14px;
    }
`