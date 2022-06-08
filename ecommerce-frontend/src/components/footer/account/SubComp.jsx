import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.div`
    padding-top: 15px;
`

export const LoginWrapper = styled.div`
    padding-top: 20px;
`

export const StyledLink = styled(Link)`
    display: flex;
    padding-top: 5px;
    align-items: center;
    gap: 10px;
    font-weight: normal;
    object-fit: contain;
    font-style: normal;
    color: ${props => props.theme.neutral};

    &:hover{
        color: #fffc5d;
        font-weight: bold;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    width: fit-content;
    gap: 10px;
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`