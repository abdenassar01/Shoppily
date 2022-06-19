import styled from "styled-components";

export const PageWrapper = styled.main`
    padding: 50px 100px;

    @media screen and (max-width: 667px) {
        padding: 10px;
        width: 100vw;
    }
`
export const Top = styled.section`

`


export const MeSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 30%;

    @media screen and (max-width: 667px) {
        width: 90%;
        padding: 30px;
    }
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
    color: ${ props => props.theme.text };
    
    @media screen and (max-width: 667px) {
        font-size: 18px;
    }
`

export const HelperText = styled.p`
    font-size: 16px;
    color: #444444;

    @media screen and (max-width: 667px) {
        font-size: 14px;
    }
`

export const MainSection = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`