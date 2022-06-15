import styled from "styled-components";

export const ProductWrapper = styled.div`
    padding: 30px;
    display: flex;
    gap: 20px;
`

export const Image = styled.div`
    width: 450px;
    height: 450px;
    background-color: ${ props => props.theme.main };
    background-image: url(${ props => props.background });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ProductTitle = styled.p`
    max-width: 700px;
    font-weight: 700;
    font-size: 1.5rem;
    color:  ${ props => props.theme.text };

    @media screen and (max-width: 667px) {
        font-size: 1.1rem;
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
        font-size: 1.3rem;
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ChangeQuantityButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    color:  ${ props => props.theme.text };
    background-color: ${ props => props.theme.secondary };
`

export const Reference = styled.p`
    font-size: 2rem;
    font-weight: 900;
    color:  ${ props => props.theme.text };
`