import Product from "./product/Product"
import { PageWrapper, ChangeReferenceButton, Reference, 
  Heading, ButtonsWrapper, AddToCart, AddToCartButton, 
  Description, DescriptionWrapper, CentredBox
} from "./styles/Styles"


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
    </PageWrapper>
  )
}


export default Listing