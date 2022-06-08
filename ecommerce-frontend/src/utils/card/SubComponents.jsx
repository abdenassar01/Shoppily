import styled from "styled-components";

export const CardWrapper = styled.article`
    width: fit-content;
    margin-left: 30px;
`

export const Container = styled.div`
    max-width: 200px;
    min-height: 250px; 
    display: flex;
    flex-direction: column;
    gap: 20px;  
    background-color: #fff;
    border-radius: 5px;

    /* To be removed */
    transition: all 0.5s ease;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    /* border: 1px solid purple; */

    &:hover{
        box-shadow:  5px 5px 10px #b8b8b8;
    }
    
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
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    height: fit-content;

    /* To be removed */
    transition: all 0.5s ease;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;

    /* border: 1px solid purple; */

    &:hover{
        box-shadow:  5px 5px 10px #b8b8b8;
    }
`

export const S = styled.s`
    font-size: 11px;
`

export const Price = styled.h3`
    
`

export const AddToCart = styled.button`
    padding: 0px 32px;
    border-radius: 5px;
    background-color: ${ props => props.theme.main};
    transition: all 0.5s ease;

    &:hover{
        background-color: ${ props => props.theme.tertiary};
    }  
`