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
    background-color: white;
    border-radius: 5px; 
    color: ${ props => props.theme.secondary };
`

export const ImageWrapper = styled.div`
    width: 100%;
`

export const Image = styled.div`
    width: 100%;
    border-radius: 5px;
    height: 150px;
    background-image: url(${props => props.img });
    background-size: cover;
    background-repeat: no-repeat;
`

export const Title = styled.h2`
    padding: 2px 5px;
    color: ${ props => props.theme.secondary };

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
    background-color: white;
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