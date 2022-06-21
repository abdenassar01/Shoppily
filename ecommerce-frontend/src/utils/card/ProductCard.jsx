import { useCart } from '../../models/cart';
import { CardWrapper, Container, ImageWrapper, 
    Image, Title, Quantity, Text, PriceSection, S, Price,
    AddToCart
 } from './SubComponents'
import { useState } from 'react';

const ProductCard = ({ listing }) => {

    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

      const cart = useCart();

      const addToCart = () => {
        const item = {
            id: listing.id,
            label: listing?.title,
            cover: listing?.products[0]?.cover,
            reference: listing?.products[0]?.label,
            price: listing?.products[0]?.price,
            quantity: 1
        }
        cart.addToCart( item )
        alert("added to cart succesfully")
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
                <AddToCart onClick={ addToCart }>
                    🗑
                </AddToCart>
            </PriceSection>
        </div>
    </CardWrapper>
  )
}

export default ProductCard