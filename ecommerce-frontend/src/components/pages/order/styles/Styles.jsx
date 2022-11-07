import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Table = styled.table`
    width: 100%;
    border: 2px solid ${ props => props.theme.main };
    border-collapse: collapse;
`

export const Thead = styled.thead`
    font-weight: 700;
    color:  ${ props => props.theme.main };
`

export const Td = styled.td`
    border: 2px solid ${ props => props.theme.main };
    padding: 5px;   
  
` 

export const Tr = styled.tr`

` 

export const Tbody = styled.tbody`
  color:  ${ props => props.theme.text };
` 