import { PageWrapper, ChangeReferenceButton, Reference, 
  Heading, ButtonsWrapper, AddToCart, AddToCartButton, 
  Description, DescriptionWrapper, CentredBox, AddFeedback,
  TextArea, Submit, FlexEnd
} from "./styles/Styles"

import Product from "./product/Product"
import Feedbacks from "./feedbacks/Feedbacks";

const Listing = () => {
  return (
    <PageWrapper>
      <Product />
        <Reference>
          <Heading>Reference</Heading>
          <ButtonsWrapper>
            <ChangeReferenceButton>Black</ChangeReferenceButton>
            <ChangeReferenceButton>White</ChangeReferenceButton>
          </ButtonsWrapper>          
        </Reference>
        <AddToCart>
          <AddToCartButton>Add To Cart</AddToCartButton>
        </AddToCart>      
        <DescriptionWrapper>
          <CentredBox>
            <Heading>Description</Heading>
            <Description dangerouslySetInnerHTML={{__html: "<h1>Text</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates saepe ea maiores qui ducimus. Quis rerum exercitationem ab excepturi, voluptates, sit possimus eaque libero blanditiis distinctio sint ducimus eos minus?</p>"}} />
          </CentredBox>
        </DescriptionWrapper>
        <Feedbacks />
        <AddFeedback>
          <CentredBox>
            <TextArea placeholder="Add Type your feedback..." />
            <FlexEnd>
              <Submit>
                Add Feedback
              </Submit>
            </FlexEnd>     
          </CentredBox>
        </AddFeedback>
    </PageWrapper>
  )
}


export default Listing