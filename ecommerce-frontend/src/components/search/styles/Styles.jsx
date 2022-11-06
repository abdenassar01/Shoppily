import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: fit-content;
    border-radius: 5px;
    width: 70%;
    border: 2px solid ${ props => props.theme.main };
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