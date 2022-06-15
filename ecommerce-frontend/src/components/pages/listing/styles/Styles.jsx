import styled from "styled-components";

export const PageWrapper = styled.main`
    padding: 30px;
`

export const Reference = styled.div`
    padding-top: 30px;
    width: fit-content;
`

export const ChangeReferenceButton = styled.button`
    padding: 5px 30px;
    color: ${ props => props.theme.main };
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid ${ props => props.theme.main };
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover{
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }
`

export const Heading = styled.h2`
    font-size: 1.7rem;
    font-weight: 700;
    color: ${ props => props.theme.main };
`

export const ButtonsWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
`

export const AddToCart = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
`

export const AddToCartButton = styled.button`
    padding: 7px 34px;
    color: ${ props => props.theme.neutral };
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 5px;
    background-color: ${ props => props.theme.main };
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 2px solid ${ props => props.theme.main };

    &:hover{
        background-color: transparent;
        color: ${ props => props.theme.main };
        border: 2px solid ${ props => props.theme.main }; 
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }
`

export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

export const Description = styled.div`
    padding: 20px;
    border-radius: 5px;
    color: white;
    background-color: #2F4858;
`

export const CentredBox = styled.div`
    width: 80%;
`