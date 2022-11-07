import styled from "styled-components";

import { StatusColors } from "../colors/colors";

export const PageWrapper = styled.div`
    position: absolute;
    z-index: 1000000;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;
`

export const AlertDailog = styled.div`
    width: 400px;
    height: 200px;
    background-color: #2F4858;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    color: ${props => props.status === "error" ? StatusColors.error[100] : props.status === "warn" ? StatusColors.warning[200] : StatusColors.succes[100] };
    animation: slide-down 1s ease-in forwards;

    @keyframes slide-down {
        from{
            top: -400px;
        }
        80%{
            top: 10px;
        }
        90%{
            top: -10px;
        }
        to{
            top: 0px;
        }
    }

    @media screen and (max-width: 666px) {
        width: 300px;
        height: 150px;
    }
`

export const AlertMessageWrapper = styled.div`
    position: absolute;
    top: 40px;
    bottom: 40px;
    left: 40px;
    right: 40px;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 666px) {
        font-size: 18px;
    }
`

export const IconWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    transition: all .3s ease-in-out;

    &:hover{
        transform: rotate(90deg);
        color: #580000;
    }
`