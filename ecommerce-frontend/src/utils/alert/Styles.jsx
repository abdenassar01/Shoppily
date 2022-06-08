import styled from "styled-components";

import { StatusColors } from "../colors/colors";

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #00000086;
    z-index: 1;
`

export const AlertDailog = styled.div`
    width: 400px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    left: 35%;
    color: ${props => props.status === "error" ? StatusColors.error[100] : props.status === "warn" ? StatusColors.warning[200] : StatusColors.succes[100] };
    animation: slide-down 1.5s ease-in forwards;

    @keyframes slide-down {
        from{
            top: -400px;
        }
        80%{
            top: 210px;
        }
        90%{
            top: 190px;
        }
        to{
            top: 200px;
        }
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