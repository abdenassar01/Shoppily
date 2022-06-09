import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'

const ProductCard = () => {

  return (
    <CardWrapper>
        <Container>
            <ImageWrapper>
                <Image src={"https://i.imgur.com/z315mrB.jpg"}/>
            </ImageWrapper>
            <Title>Product - Smart Watch</Title>
            <Quantity>
                <Text>20 left</Text>
            </Quantity>
        </Container>
        <PriceSection>
            <div>
                <S>text</S>
                <Price>50 Dh</Price>
            </div>
            <AddToCart onClick={() => alert("added To Card")}>
                🗑
            </AddToCart>
        </PriceSection>
    </CardWrapper>
  )
}

export default ProductCard