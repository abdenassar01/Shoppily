import { FeedbacksWrapper, CentredBox, FeedbacksList,
    FeedBackItem, User, FeedbackContent, Heading, Wrapper
 } from "./styles/Styles";

const Feedbacks = ({ feedbacks }) => {
    console.log("feedbacks: " + feedbacks)
  return (
    <Wrapper>
        <FeedbacksWrapper>
            <Heading>Feedbacks</Heading>
            <CentredBox> 
                <FeedbacksList>
                {
                    //TODO: complete fetching feeedbacks for each listing
                    feedbacks.map(feedback =>(
                        <FeedBackItem key={ feedback?.id }>
                            <User>{ feedback?.content }</User>
                            <FeedbackContent>
                                { feedback?.date_created }
                            </FeedbackContent>
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