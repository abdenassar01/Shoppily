import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    
    html{
        font-size: 16px;
        font-family: 'Roboto', monospace; 
        background-color: #E0E0E0;
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
        background-color: #FF385C ;
        color: #FFFFFF;
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 8px;
        background-color: green; 
    }

    ::-webkit-scrollbar-thumb {
        background:  #FF385C ;
        border-radius: 50px;
    }
`