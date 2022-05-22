import styled from "styled-components";

export const Button = styled.button`
    padding: 7px 22px;
    border-radius: 50px;
    background-color: #FFFFFF;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

`

export const PrimaryButton = styled(Button)`
    background-color: ${ props => props.theme.main };
    border: 2px solid ${ props => props.theme.main };
    color: white;

    &:hover{
        background-color: white;
        color: ${ props => props.theme.main };
    }
`

export const SecondaryButton = styled(Button)`
    border: 2px solid ${ props => props.theme.main };
    color: ${ props => props.theme.main };

    &:hover{
        background-color: ${ props => props.theme.main};
        color: white;
    }
`

export const TertiaryButton = styled(Button)`
    color: ${ props => props.theme.main };

    &:hover{
        color: ${ props => props.theme.tertiary };
    }
`

export const IconButton = styled(PrimaryButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50px;

    &:hover{
        color: ${ props => props.theme.main };
        background-color: transparent;
    }

`

