import Product from "./product/Product"
import { PageWrapper, ChangeReferenceButton, Reference, 
  Heading
} from "./styles/Styles"


const Listing = () => {
  return (
    <PageWrapper>
      <Product />
        <Reference>
          <Heading>Reference</Heading>
          <ChangeReferenceButton>Black</ChangeReferenceButton>
          <ChangeReferenceButton>White</ChangeReferenceButton>
        </Reference>
    </PageWrapper>
  )
}

export default Listing