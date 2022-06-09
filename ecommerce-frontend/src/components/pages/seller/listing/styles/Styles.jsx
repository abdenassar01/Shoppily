import styled from "styled-components";


export const PageWrapper = styled.main`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme.background };
`

export const BigHeading = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: ${ props => props.theme.main };
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