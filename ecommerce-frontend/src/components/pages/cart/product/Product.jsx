import { useCart } from "../../../../models/cart"
import { Article, ProductInfo, PriceSection, Image,
    TextWrapper, ProductInfoContent, Quantity, ChangeQuantityButton,
    Title, Type, RemoveAllButton
} from "../styles/Styles"

const Product = ({ item }) => {

    const cart = useCart();

    const addQuantity = () => {

    }
    const sousQuantity = () => {
        
    }

    const remove = () => {
        cart.removeItem(item?.id)
    }

  return (
    <Article>
        <ProductInfo>
            <Image src={ item?.cover } alt="glassess" />
            <ProductInfoContent>
                <TextWrapper>
                    <Title>{ item?.label }</Title>
                    <Type>{ item?.reference }</Type>
                </TextWrapper>
                <Quantity>
                    <ChangeQuantityButton onClick={ sousQuantity }> - </ChangeQuantityButton>
                        <Title>1</Title>
                    <ChangeQuantityButton onClick={ addQuantity }> + </ChangeQuantityButton>
                </Quantity>
            </ProductInfoContent> 
        </ProductInfo>
        <PriceSection>
            <Title>{ item?.price } $</Title>
            <RemoveAllButton onClick={ remove }>Remove</RemoveAllButton>
        </PriceSection>
    </Article>
  )
}

export default Product