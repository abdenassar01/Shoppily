import styled from "styled-components";
import { StyledLink } from "../links/RouteLink";

export const CardWrapper = styled(StyledLink)`
    min-width: fit-content;
`

export const Container = styled.article`
    max-width: 200px;
    min-height: 250px; 
    display: flex;
    flex-direction: column;
    gap: 20px;  
    background-color: ${props => props.theme.background };
    border-radius: 5px;   
`

export const ImageWrapper = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 5px;
`

export const Title = styled.h2`
    padding: 2px 5px;
`

export const Quantity = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Text = styled.p`
    padding-right: 10px;
`

export const PriceSection = styled.div`
    margin-top: 10px;
    padding-left: 10px;
    background-color: ${props => props.theme.background };
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    height: fit-content;
`

export const S = styled.s`
    font-size: 11px;
`

export const Price = styled.h3`
    
`

export const AddToCart = styled.button`
    padding: 0px 32px;
    border-radius: 5px;
    background-color: ${ props => props.theme.secondary };
    transition: all 0.5s ease;

    &:hover{
        background-color: ${ props => props.theme.tertiary};
    }  
`