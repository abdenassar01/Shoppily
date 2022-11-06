import styled from "styled-components";
import { PrimaryLink } from "../../../../../utils";

export const SearchWrapper = styled.main`
    
`

export const TopSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
`

export const ListingWrapper = styled.section`
    padding: 40px 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const SearchBar = styled.div`
    display: flex;
    height: fit-content;
    border-radius: 5px;
    width: 70%;
    border: 2px solid ${ props => props.theme.main };
`

export const SearchButton = styled(PrimaryLink)`
    text-align: center;
    color: #363636;
    padding: 5px 40px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 1px solid ${ props => props.theme.main };
    background-color: ${ props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover{
        background-color: transparent;
        color: ${ props => props.theme.main };
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }

    @media screen and (max-width: 667px) {
        padding: 5px 5%;
    }
`

export const Icon = styled.div`
    height: 30px;
    background-color: white;
    border-radius: 5px 0px 0px 5px;
    color: ${ props => props.theme.main };
`

export const Input = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 0 5px 5px 0;
    caret-color: ${props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:focus {
        outline: none;
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }
`