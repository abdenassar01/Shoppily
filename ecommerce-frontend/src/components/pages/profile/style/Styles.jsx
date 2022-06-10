import styled from "styled-components";

export const PageWrapper = styled.main`
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme.background };
    color: ${ props => props.theme.text };
`

export const CenteredContent = styled.div`
    width: 80%;

    @media screen and (max-width: 667px) {
        width: 95%;
    }
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MeSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 3px solid ${ props => props.theme.main };

    @media screen and (max-width: 667px) {
        width: 50px;
        height: 50px;
    }
`

export const PersonInfoWrapper = styled.div`
    
`

export const Name = styled.h2`
    font-weight: bold;
    font-size: 24px;
    
    @media screen and (max-width: 667px) {
        font-size: 18px;
    }
`

export const Username = styled.p`
    color: #4B4B4B;
    font-size: 1rem;

    @media screen and (max-width: 667px) {
        font-size: .8rem;
    }
`

export const Role = styled.h1`
    font-weight: bold;
    font-size: 32px;
    color: #BD1E59;

    @media screen and (max-width: 667px) {
        font-size: 22px;
    }
`

export const Form = styled.form`
    width: 100%;
    margin-top: 50px;

`

export const LongField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`

export const Raw = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px 0;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 700;
    color: ${ props => props.theme.main };
`

export const Input = styled.input`
    border-radius: 5px;
    margin-bottom: 5px;
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

export const ErrorAlert = styled.span`
    font-size: 12px;
    color: #ff004c;
`