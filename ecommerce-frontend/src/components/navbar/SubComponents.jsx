import styled from 'styled-components'

import { PrimaryColors } from '../../utils'
import { Link } from "react-router-dom";


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

export const Logo = styled.nav`
    
`

export const Account = styled.nav`
    display: flex;
    justify-content: space-around;
    /* padding-right: 20px; */
    gap: 20px;

`