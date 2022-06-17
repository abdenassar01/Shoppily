import styled from "styled-components";

export const HomePageWrapper = styled.main`
    padding: 10px 20px;
    width: 100%;
    overflow: hidden;
`

export const TopSection = styled.section`
    padding: 10px 20px 20px 20px;
    display: flex; 
    justify-content: space-between;

    @media screen and (max-width: 667px) {
        padding: 10px 0px;
    }
`

export const LegendSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 3%;
`

export const CategoriesListingsWrapper = styled.section`
    
`

export const SearchButton = styled.button`
    text-align: center;
    color: #363636;
    padding: 5px 40px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 1px solid ${ props => props.theme.main };
    background-color: ${ props => props.theme.main };
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover{
        background-color: transparent;
        color: ${ props => props.theme.main };
        box-shadow:  5px 5px 0px ${props => props.theme.main };
    }

    @media screen and (max-width: 667px) {
        padding: 5px 5%;
    }
`

export const LogoWrapper = styled.div`
    @media screen and (max-width: 676px) {
       display: none; 
    }
`

export const MiddleBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 85%;
    gap: 10px;

    @media screen and (max-width: 667px){
        width: 100%;
    }
`

export const Image = styled.img`
    border-radius: 5px;
    width: 100%;

    @media screen and (max-width: 667px){
        width: 100%;
    }
`

export const Top = styled.div`
    width: 90%;

    @media screen and (max-width: 667px){
        width: 100%;
    }
`

export const Bottom = styled.div`
    background-color: ${props => props.theme.secondary } ;
    border-radius: 5px;
    width: 90%;
    color: white;
    padding: 10px;

   
    @media screen and (max-width: 667px){
        width: 100%;
    }
`

export const Heading = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: underline;
    margin-bottom: 10px;
    
    @media screen and (max-width: 667px){
        font-size: 16px;
    }
` 

export const SellersSlider = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        height: 3px;
        border-radius: 50px;
        background-color: #FF385C; 
    }

    ::-webkit-scrollbar-thumb {
        background:#ffa5b5;
        border-radius: 50px;
    }
`