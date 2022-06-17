import { FeedbacksWrapper, CentredBox, FeedbacksList,
    FeedBackItem, User, FeedbackContent, Heading, Wrapper
 } from "./styles/Styles";

const Feedbacks = ({ feedbacks }) => {
  return (
    <Wrapper>
        <FeedbacksWrapper>
            <Heading>Feedbacks</Heading>
            <CentredBox> 
                <FeedbacksList>
                {
                    //TODO: complete fetching feeedbacks for each listing
                    feedbacks.map(feedback =>(
                        <FeedBackItem>
                            <User>Name</User>
                            <FeedbackContent>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Ipsam pariatur dicta, iusto reprehenderit similique ex quisquam! 
                                Assumenda, debitis atque obcaecati quasi consequuntur vitae,
                                quae dolore ratione explicabo pariatur error ullam!
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