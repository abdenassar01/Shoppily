import styled from "styled-components";

import { PrimaryLink } from "../../utils";

export const CategoryWrapper = styled.aside`
    padding: 10px;
    background-color: white;
    width: fit-content;
    border-radius: 10px;
    min-width: 250px;
    
    @media screen and (max-width: 667px) {
    display: none;
    }
`

export const CategoriesList = styled.div`
`

export const CategoryItemWrapper = styled(PrimaryLink)`
    padding: 5px;
    cursor: pointer;
    margin: 2px 0;
    border-radius: 3px;
    transition: all .2s ease-in;
    width: 100%;
    justify-content: start; 

    &:hover{
        background-color: ${props => props.theme.main };
        color: white;
    }
`

export const CategoryHeader = styled.div`
    text-align: center;
    color: ${props => props.theme.main };
    border-bottom: 1px solid ${props => props.theme.main };
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
`

export const Header = styled.h3`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`