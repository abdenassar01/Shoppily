import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'

const ProductCard = ({ listing }) => {

    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

  return (
    <CardWrapper to={`/listing/${listing.id}`}>
        <div>
            <Container>
                <ImageWrapper>
                    <Image img={ listing?.products[0]?.cover }/>
                </ImageWrapper>
                <Title>{ truncateString(listing?.title, 100) }</Title>
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