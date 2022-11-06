import styled from "styled-components";

export const PageWrapper = styled.main`
`

export const ContentWrapper = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 43px 0;
`

export const Model = styled.div`

`

export const Form = styled.form`
    width: 45%;
    display: grid;
    place-items: center;
    padding: 50px 0;
    gap: 20px;
    background-color: ${props => props.theme.neutral };
    border-radius: 10px;
    box-shadow: 20px 20px 60px #bebebe,
            -20px -20px 60px #ffffff;
`

export const Field = styled.div`
    width: 90%;
    /* border: 1px solid purple; */
`

export const ErrorSpan = styled.span`
    font-size: 12px;
    color: #ff004c;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 50px;
    padding-left: 10px;
    caret-color: ${props => props.theme.main };
    border: 2px solid ${props => props.error ? "#ff004c" : props.theme.main };

    &:focus{
        border: 2px solid ${props => props.error ? "#ff004c" : props.theme.main };
        outline: none;
        box-shadow:  5px 2px 10px ${props => props.error ? "#ff004c" : props.theme.main };
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 3px;
    padding-left: 10px;
    padding-top: 10px;
    caret-color: ${props => props.theme.main };
    border: 2px solid ${props => props.error ? "#ff004c" : props.theme.main };
    transition: all .3s ease-in-out;

    &:focus{
        border: 2px solid ${props => props.error ? "#ff004c" : props.theme.main };
        outline: none;
        box-shadow:  5px 2px 10px ${props => props.error ? "#ff004c" : props.theme.main };
    }
`

export const Label = styled.label`
    padding-left: 10px; 
    font-weight: bold;
    color: ${props => props.error ? "#ff004c" : props.theme.main };
`

export const Submit = styled.input`
    width: 40%;
    padding: 10px 0;
    border-radius: 50px;
    font-weight: bold;
    color:  ${props => props.theme.neutral };
    background-color: ${props => props.theme.main };
    border: 2px solid ${props => props.theme.main };
    transition: all .3s ease-in-out;

    &:hover{
        box-shadow:  5px 2px 10px ${props => props.theme.main };
    }
    
`

export const Illustration = styled.img`
    width: 450px;
`