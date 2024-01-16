import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    font-family:'Almoni', Ariel, serif;
    height:100vh;
    font-size:18px;
    padding:0;
    margin:0;
    
}

html{
    box-sizing:border-box;
    direction: rtl;
}

*,*::before, *::after{
 box-sizing:border-box;
}
`;

export default GlobalStyles;
