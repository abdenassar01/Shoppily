import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'

const ProductCard = () => {

  return (
    <CardWrapper to={`/listing/${12}`}>
        <div>
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
        </div>
    </CardWrapper>
  )
}

export default ProductCard