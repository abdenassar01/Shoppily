import styled from "styled-components";

export const PageWrapper = styled.main`
    background-color: ${props => props.theme.background };
`

export const MainSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 30px;
    background-color: ${props => props.color && props.color };
`

export const BigHeading = styled.h1`
    font-size: 48px;
    font-weight: bold;
    line-height: 56.25px;
    color: ${props => props.theme.main };
    width: 472px;

    @media (max-width: 667px) {
        font-size: 28px;
    }
`

export const TextWrapper = styled.div`
    width: 402px;
    text-align: left;
`

export const MainIllustration = styled.img`
    width: 514px;

    @media (max-width: 667px) {
        width: 350px;
    }
`

export const MeduimHeading = styled.h2`
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;

    @media (max-width: 667px) {
        margin-top: 30px;
        font-size: 22px;
    }
`

export const Text = styled.p`
    padding-top: 20px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color && props.color };
    
    @media (max-width: 667px) {
        font-size: 12px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
`

export const FormSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
`

export const SmallHeading = styled.h3`
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;

    @media (max-width: 667px) {
        font-size: 22px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
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

    @media (max-width: 667px) {
        width: 100%;
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

export const ErrorMessage = styled.span`
    font-size: 10px;
    padding-top: 5px;
    color: #ff0037;
`

export const Submit = styled(Input)`
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

export const FormTextWrapper = styled.div`
    width: 50%;
    text-align: center;

    @media (max-width: 667px) {
        width: 90%;
    }
`