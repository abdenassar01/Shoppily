import styled from "styled-components";

export const CartsWrapper = styled.div`
    display: flex;
    gap: 5px;
    overflow-x: scroll;
    border-radius: 10px;

    &::-webkit-scrollbar {
        width: 7px;
        height: 3px;
        border-radius: 50px;
        background-color: #f3f2f2; 
    }

    ::-webkit-scrollbar-thumb {
        background:  #FF385C;
        border-radius: 50px;
    }
`

export const Container = styled.div`
    margin: 30px 0;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props => props.theme.neutral };
`

export const Title = styled.h2`
    padding: 5px;
    font-size: 1.3rem;
    font-weight: 700;
    color: ${props => props.theme.secondary } ;
`