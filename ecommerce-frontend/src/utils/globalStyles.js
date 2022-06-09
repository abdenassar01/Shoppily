import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    
    html{
        font-size: 16px;
        font-family: 'Roboto', monospace; 
        background-color: #E0E0E0;
        scroll-behavior: smooth;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        font-size: 100%;
        line-height: 1;
        font: inherit;
        vertical-align: baseline;
    }

    ::selection{
        background-color: #00ACEE ;
        color: #FFFFFF;
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 8px;
        background-color: #00ACEE; 
    }

    ::-webkit-scrollbar-thumb {
        background:  #2374E1 ;
        border-radius: 50px;
    }
`