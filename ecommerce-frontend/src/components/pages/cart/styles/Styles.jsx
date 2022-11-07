import styled from "styled-components";

export const PageWrapper = styled.main`
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    color:  ${ props => props.theme.text };
    background-color: ${ props => props.theme.backround };
`

export const CentredContent = styled.div`
    width: 85%;
    display: flex;
    padding: 30px;
    border-radius: 10px;
    background-color: ${ props => props.theme.tertiary };
    flex-direction: column;


    @media screen and (max-width: 667px) {
        width: 95%;
        padding: 30px 20px;
    }
`

export const MainHeading = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    
    @media screen and (max-width: 667px) {
        font-size: 1rem;
    }
`

export const TopSection = styled.section`
    display: flex;
    justify-content: space-between;
`

export const MainSection = styled.div`
    padding-top: 50px;
`

export const Article = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`

export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 667px) {
        gap: 5px;
    }
`

export const PriceSection = styled.div`
    
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 5px;

    @media screen and (max-width: 667px) {
        width: 100px;
        height: 100px;
    }
`

export const ProductInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    @media screen and (max-width: 667px) {
        gap: 10px;
    }
`

export const TextWrapper = styled.div`
    
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;

    @media screen and (max-width: 667px) {
        font-size: .8rem;
    }
`

export const Type = styled.p`
    font-size: 1.1rem;
    color: #525252;
        
    @media screen and (max-width: 667px) {
        font-size: .7rem;
    }
`

export const RemoveAllButton = styled.button`
    background-color: transparent;
    color: #ff0055;
    text-decoration: underline;
    transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);

    &:hover{
        font-weight: 700;
    }

    @media screen and (max-width: 667px) {
        font-size: .8rem;
    }
`

export const ChangeQuantityButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
`

export const Hr = styled.hr`
    background-color:#868686;
    height: 2px;
`

export const CheckoutWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
`

export const Checkout = styled.div`
    display: flex;
    gap: 30px;
`

export const CheckoutHeading = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;

    @media screen and (max-width: 667px) {
        font-size: 1rem;
    }
`

export const ItemsCount = styled.p`
    
`

export const TotalPrice = styled.h1`
    font-size: 1.4rem;
    font-weight: 900;

    @media screen and (max-width: 667px) {
        font-size: 1.1rem;
    }
`

export const ElementWrapper = styled.div`
    
`

export const CheckoutButton = styled.button`
    width: 100%;
    margin: 10px 0;
    padding: 7px 0;
    border: 2px solid ${ props => props.theme.secondary };
    background-color: ${ props => props.theme.secondary };
    color: white;
    border-radius: 5px;
    font-weight: 700;
    transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);

    &:hover{
        background-color: transparent;
        color: ${props => props.theme.text };
        box-shadow:  5px 5px 0px ${props => props.theme.secondary };
    }
`