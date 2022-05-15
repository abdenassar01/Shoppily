import styled from "styled-components";

export const  Icon = styled.img`
    width: ${props => props.width ? props.width : "25px"};
    height: ${props => props.width};
    margin: ${props => props.margin ? props.margin: 0};
`