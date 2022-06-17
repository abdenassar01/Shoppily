import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 30px;
    justify-content: center;
`

export const FeedbacksWrapper = styled.div`
    width: 80%;
`

export const CentredBox = styled.div` 
    padding: 20px;
    border-radius: 5px;
    color: white;
    background-color: #2F4858;
`

export const FeedbacksList = styled.ul`
    list-style: none;
`

export const FeedBackItem = styled.li`
    margin: 20px 0;
`

export const User = styled.p`
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 5px; 
`

export const FeedbackContent = styled.p`
    
`

export const Heading = styled.h2`
    font-size: 1.7rem;
    font-weight: 700;
    color: ${ props => props.theme.main };
`
