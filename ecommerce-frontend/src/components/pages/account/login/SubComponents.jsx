import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0e0e0; 
    padding-top: 20px;
`

export const Modal = styled.div`
    width: 50%;
    padding: 70px;
    margin: 50px 0;
    border-radius: 10px;
    position: relative;
    display: grid;
    place-items: center;
    background: ${props => props.theme.neutral };
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;

    @media (max-width: 768px){
        width: 95%;
    }         
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 768px){
        width: 140%;
    }     
`

export const Field = styled.div`
    margin: 2px 0;
    display: flex;
    flex-direction: column;    
`

export const Label = styled.label`
    color: ${ props => props.theme.main };
    font-size: 14px;
    font-weight: bold;
`

export const InputWrapper = styled.div`
    display: flex;
    object-fit: contain;
    border-radius: 5px;
    border: 2px solid ${ props => props.theme.main };
`

export const Input = styled.input`
    border-radius: 0 5px 5px 0; 
    width: 100% ;
    height: 30px ;
    padding-left: 10px;
    caret-color: ${ props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:focus {
        outline: none;
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }   
`

export const LogoWrapper = styled.div`
    width: fit-content;
    position: absolute;
    top: 10px;
    left: 10px;
`


export const Icon = styled.div`
    border-radius: 5px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Submit = styled.input`
    padding: 7px 0;
    margin: 20px 50px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    border: 2px solid ${ props => props.theme.main };
    background-color: ${ props => props.theme.main };
    transition: all 0.2s ease-in-out;

    &:hover{
        color:  ${ props => props.theme.main };
        background-color: white;
        border: 2px solid ${props => props.theme.main};
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }
`

export const ErrorSpan = styled.span`
    font-size: 12px;
    color: #ff0022;
    margin-bottom: 10px;
    margin-top: 3px;
`
