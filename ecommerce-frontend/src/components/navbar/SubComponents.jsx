import styled from 'styled-components'

export const Wrapper = styled.header`
    background-color: ${ props => props.theme.main };
    color: ${ props => props.theme.neutral };
    padding: 2px 20px;
    display: flex;
    justify-content: space-between;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between; 
    width: fit-content;
    gap: 30px;
`

export const Account = styled.nav`
    display: flex;
    justify-content: space-around;
    gap: 20px;

`