import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    color: white;
    text-decoration: none;
    padding: 2px 10px;
`

export const LogoLink = styled(StyledLink)`
    font-weight: bold;
`

export const PrimaryLink = styled(StyledLink)`
    font-weight: bold;

    &:hover{
        color: ${props => props.theme.secondary};
    }
`
