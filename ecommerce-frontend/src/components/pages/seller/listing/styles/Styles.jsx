import styled from "styled-components";


export const PageWrapper = styled.main`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme.background };

    @media (max-width: 667px) {
        padding: 30px 0;
    }
`

export const BigHeading = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: ${ props => props.theme.main };

    @media (max-width: 667px) {
        font-size: 22px; 
    }
`

export const FormWrapper = styled.div`
    width: 100%;
`

export const Form = styled.form`
    padding:20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 5px;

    @media screen and ( max-width: 667px){
        width: 98%;
    }
`

export const Label = styled.label`
    font-size: 14px;
    color: ${props => props.theme.main };
`

export const Input = styled.input`
    border-radius: 5px;
    padding: 7px;
    border: 2px solid ${props => props.theme.main };
    caret-color: ${props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:focus{
        outline: none;
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }
`

export const Submit = styled(Input)`
    margin-top: 20px;
    width: 20%;
    background-color: ${props => props.theme.main };
    color: ${props => props.theme.neutral };
    font-weight: 500;

    &:hover{
        background-color: transparent;
        color: ${props => props.theme.text };
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }

    @media (max-width: 667px) {
        width: 50%; 
    }
`

export const SubmitWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 667px) {
        width: 100%; 
    }
`

export const ErrorMessage = styled.span`
    font-size: 10px;
    padding-top: 5px;
    color: #ff0037;
`

export const EditorBorder = styled.div`
    padding: 2px;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.main };
`

export const ProductList = styled.div`
    width: 100%;
`

export const ProductListHeading = styled.h1`
    text-align: center;
    font-size: 20px;
`

export const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HorisontalSpacer = styled.div`
    margin: 7px 0;
`

export const InputWrapper = styled.div`
    width: 100%;
    display: grid;
    position: relative;
`

export const Currency = styled.div`
    background-color: ${ props => props.theme.main };
    color: ${ props => props.theme.neutral };
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
`

export const ImageInput = styled(Input)`
    padding: 0;
    
    &::-webkit-file-upload-button {
        margin-right: 20px;

        border: none;
        background-color: ${ props => props.theme.main };
        color: ${ props => props.theme.neutral };
        padding: 7px 40px;
    }
`

export const AddProdButton = styled.button`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 20%;
    padding: 7px 0;
    border-radius: 5px;
    background-color: transparent;
    color: ${props => props.theme.main };
    font-weight: 500;
    border: 2px solid ${props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover{
        outline: none;
        box-shadow:  -5px -5px 0px ${props => props.theme.main };
    }

    @media (max-width: 667px) {
        width: 80%; 
    }
`