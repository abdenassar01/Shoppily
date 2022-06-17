import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Image = styled.div`
    width: 450px;
    height: 450px;
    background-color: #2F4858;
    background-image: url(${ props => props.background });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;

    @media screen and (max-width: 667px) {
        width: 150px;
        height: 150px;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 667px) {
        width: 95%;
    }
`

export const ProductTitle = styled.p`
    max-width: 700px;
    font-weight: 700;
    font-size: 1.5rem;
    color:  ${ props => props.theme.text };

    @media screen and (max-width: 667px) {
        font-size: .8rem;
    }
`

export const PriceBox = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: 900;
    color:  ${ props => props.theme.text };
    
    @media screen and (max-width: 667px) {
        font-size: .9rem;
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    @media screen and (max-width: 667px) {
        gap: 5px;
    }
`

export const ChangeQuantityButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    color:  ${ props => props.theme.text };
    background-color: ${ props => props.theme.secondary };

    @media screen and (max-width: 667px) {
        width: 20px;
        height: 20px;
    }
`

export const Reference = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color:  ${ props => props.theme.text };

    @media screen and (max-width: 667px) {
        font-size: 1rem;
    }
`