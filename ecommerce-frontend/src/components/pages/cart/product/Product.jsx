import { Article, ProductInfo, PriceSection, Image,
    TextWrapper, ProductInfoContent, Quantity, ChangeQuantityButton,
    Title, Type, MainHeading, RemoveItemButton, RemoveAllButton
} from "../styles/Styles"

const Product = () => {
  return (
    <Article>
        <ProductInfo>
            <Image src="https://i.imgur.com/n68hEmb.jpg" alt="glassess" />
            <ProductInfoContent>
                <TextWrapper>
                    <Title>Just assuming the title is very long so how it's gonna look on mobile</Title>
                    <Type>Black</Type>
                </TextWrapper>
                <Quantity>
                    <ChangeQuantityButton> - </ChangeQuantityButton>
                        <Title>1</Title>
                    <ChangeQuantityButton> + </ChangeQuantityButton>
                </Quantity>
            </ProductInfoContent> 
        </ProductInfo>
        <PriceSection>
            <Title>15.00 $</Title>
            <RemoveAllButton>Remove</RemoveAllButton>
        </PriceSection>
    </Article>
  )
}

export default Product