import { FeedbacksWrapper, CentredBox, FeedbacksList,
    FeedBackItem, User, FeedbackContent, Heading, Wrapper
 } from "./styles/Styles";


const Feedbacks = () => {
  return (
    <Wrapper>
        <FeedbacksWrapper>
            <Heading>Feedbacks</Heading>
            <CentredBox> 
                <FeedbacksList>
                    <FeedBackItem>
                        <User>nassardev</User>
                        <FeedbackContent>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam pariatur dicta, iusto reprehenderit similique ex quisquam! Assumenda, debitis atque obcaecati quasi consequuntur vitae, quae dolore ratione explicabo pariatur error ullam!
                        </FeedbackContent>
                    </FeedBackItem>  
                    <FeedBackItem>
                        <User>nassardev</User>
                        <FeedbackContent>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam pariatur dicta, iusto reprehenderit similique ex quisquam! Assumenda, debitis atque obcaecati quasi consequuntur vitae, quae dolore ratione explicabo pariatur error ullam!
                        </FeedbackContent>
                    </FeedBackItem>
                </FeedbacksList>
            </CentredBox>
        </FeedbacksWrapper>
    </Wrapper>
   
  )
}

export default Feedbacks