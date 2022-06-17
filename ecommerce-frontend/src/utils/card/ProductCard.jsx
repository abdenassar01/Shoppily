import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'

const ProductCard = ({ listing }) => {

  return (
    <CardWrapper to={`/listing/${listing.id}`}>
        <div>
            <Container>
                <ImageWrapper>
                    <Image img={ listing?.products[0]?.cover }/>
                </ImageWrapper>
                <Title>{ listing?.title }</Title>
                <Quantity>
                    <Text>{ listing?.products[0]?.availableQte } left</Text>
                </Quantity>
            </Container>
            <PriceSection>
                <div>
                    <S>{ listing?.products[0]?.price + 10 }</S>
                    <Price>{ listing?.products[0]?.price } Dh</Price>
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