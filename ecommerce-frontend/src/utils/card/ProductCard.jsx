import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'

 import img from './Sale.jpg'

const ProductCard = () => {

  return (
    <CardWrapper>
        <Container>
            <ImageWrapper>
                <Image src={img}/>
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