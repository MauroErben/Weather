import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #999;
`;
export const HeaderSearch = styled.div`
    display: flex;
    
    input[type="text"]{
        border: none;
        outline: none;
        padding: 10px;
    }

    @media (min-width: 768px) {
       input[type="text"]{
           width: 350px;
       }
    }
`;

export const Button = styled.button`
    width: 50px;
    background: #fff;
    border: none;
    padding: 5px;
    color: #000;
    margin-left: 10px;

    &:hover{
        cursor: pointer;
        background: #eee;
    }

    @media (max-width: 350px){
        font-size: 16px;
    }

    @media (min-width: 350px) {
        font-size: 18px;
    }

    @media (min-width: 768px){
        font-size: 20px;
    }
`