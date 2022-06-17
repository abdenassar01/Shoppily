import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: ${ props => props.theme.main };
    color: ${ props => props.theme.neutral };
    padding: 2px 20px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 1000;

    @media screen and (max-width: 780px) {
        display:none;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between; 
    width: fit-content;
    gap: 30px;
`

export const MobileNav = styled.header`
    background-color: ${props => props.theme.main };
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 0;
    display: none;

    @media screen and (max-width: 780px) {
        display: block;
    }
`

export const ExtendedMenu = styled.nav`
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px; 
`

export const AccountWrapper = styled.div`
    padding-top: 40px;
`

export const Account = styled.nav`
    display: flex;
    justify-content: space-around;
    gap: 20px;
`

export const NavTab = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50px;
`

export const NameText = styled.p`
    text-transform: capitalize;
`

export const Logout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: white;
    font-weight: 800;
    cursor: pointer;

    &:hover{
        color: #d1d1d1;
    }
`