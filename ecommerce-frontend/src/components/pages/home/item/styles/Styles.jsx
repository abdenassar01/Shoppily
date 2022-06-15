import styled from "styled-components";
import { PrimaryLink } from "../../../../../utils"; 

export const Container = styled(PrimaryLink)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Avatar = styled.img`
    width: 100px;


    @media screen and (max-width: 667px){
        width: 50px;
    }
`

export const Title = styled.p`
    color: white;

    @media screen and (max-width: 667px){
        font-size: 12px;
    }
`