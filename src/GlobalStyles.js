import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --swiper-theme-color: #974f31;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }

    .swiper-button-prev, .swiper-button-next{
        @media screen and (max-width:800px){
            display: none;
        }
    }
`;

export default GlobalStyle;
