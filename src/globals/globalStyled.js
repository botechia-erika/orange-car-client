import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: 'IBM Plex Sans', sans-serif;
:root{
    --light-default: #FFFFFF;
    --principal-orange: orangered;
    --orange-light: #FF6347;
    --orange-default: #4618AC;
    --orange-rose: #FF6A51;
    --gray-hf: #434343;
    --color-white: white;

}


`;

export default GlobalStyled;
