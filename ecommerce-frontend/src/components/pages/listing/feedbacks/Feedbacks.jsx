import { FeedbacksWrapper, CentredBox, FeedbacksList,
    FeedBackItem, User, FeedbackContent, Heading, Wrapper, DateCreated
 } from "./styles/Styles";

const Feedbacks = ({ feedbacks }) => {
  return (
    <Wrapper>
        <FeedbacksWrapper>
            <Heading>Feedbacks</Heading>
            <CentredBox> 
                <FeedbacksList>
                {
                    feedbacks.map(feedback =>(
                        <FeedBackItem key={ feedback?.id }>
                            <User>{ feedback?.user.firstname  + " " + feedback?.user.lastname }</User>
                            <FeedbackContent>
                                { feedback?.content }
                            </FeedbackContent>
                            <DateCreated>{ new Date(feedback?.date_created).toLocaleDateString() }</DateCreated>
                        </FeedBackItem> 
                    ))
                }        
                </FeedbacksList>
            </CentredBox>
        </FeedbacksWrapper>
    </Wrapper>
   
  )
}

export default Feedbacks