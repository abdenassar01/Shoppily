import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    color: ${ props => props.color ? props.color : props.theme.text };
    text-decoration: none;
    padding: 2px 10px;
`

export const LogoLink = styled(StyledLink)`
    font-weight: bold;
`

export const PrimaryLink = styled(StyledLink)`
    font-weight: bold;

    &:hover{
        color: #BCC6AC ;
    }
`

export const TextLink = styled(Link)`
   font-weight: bold;
   text-decoration: none;
   color: ${ props => props.color ? props.color : props.theme.text };

    &:hover{
        color: ${ props => props.theme.tertiary}; 
    } 
`
