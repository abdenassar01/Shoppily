import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: ${ props => props.theme.main};
    color: white;
    padding-top: 10px;
`

export const Left = styled.div`
    min-width: 300px;
`

export const Right = styled.div`
    min-width: 300px;
`

export const Header = styled.h2`
    font-weight: bold;
    font-size: 1.4rem;
`

export const ContentBox = styled.div`
    margin-top: 20px;
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;

    @media (max-width: 768px) {
        gap: 20px;
        font-size: 1rem;
    }
`

export const RouteLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.helperText };
    font-style: normal;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
        color: #f1ef52;
    }
`

export const SocialMedia = styled.div`
    padding-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2rem;    
    gap: 10px;
`

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: fit-content;
    gap: 10px;
    align-items: center;
`

export const A = styled.a`
    color: ${ props => props.iconColor };
    background-color: white;
    padding: 5px; 
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: white;
        background-color: ${ props => props.iconColor };
        border-color: ${ props => props.iconColor };
    }
`

export const H2 = styled.h2`
    font-size: 15px;
    padding: 10px 0;
`

export const AccountDetail = styled.div`
   
`