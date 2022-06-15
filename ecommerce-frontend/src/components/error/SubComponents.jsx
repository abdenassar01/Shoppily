import styled from "styled-components";

import { PrimaryLink } from "../../utils"

export const PageWrapper = styled.main`
  /* TODO: change color to adapte both dark and lite theme */
    background-color: ${props => props.theme.main}; 
`

export const Model = styled.div`
    display: flex;
`

export const ErrorMessage = styled.div`
    padding: 100px 0;
    font-family: 'Mochiy Pop One', sans-serif;
    color: ${props => props.theme.neutral};
`

export const Image = styled.img`
    height: 600px;
    opacity: .5;
`

export const BigHeading = styled.h1`
    font-size: 5rem;
    color: #ff0015;
`
export const MeduimHeading = styled.h2`
    font-size: 2rem;  
`

export const SmalHeading = styled.h3`
    margin-top: 50px;
    font-size: 1.2rem;
`

export const StyledPrimaryLink = styled(PrimaryLink)`
    margin-top: 20px;
    border: 2px solid ${ props => props.theme.main };
    color: white;
    border-radius: 50px;
    background-color: ${ props => props.theme.main };
    font-family: 'Roboto Mono', monospace ;
    padding: 7px 32px;
    font-weight: 900;
    transition: all .2s ease-in;

    &:hover{
        background-color: transparent;
        box-shadow: 5px 5px 4px ${ props => props.theme.main };
    }
`