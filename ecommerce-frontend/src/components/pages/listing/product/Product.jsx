import { useEffect, useState } from "react"
import { ProductWrapper, Quantity, ChangeQuantityButton,
  Image, ProductInfo, ProductTitle, PriceBox, Reference
} from "./styles/Styles";

import { ImPriceTags } from "react-icons/im";


const Product = ({ id, products, title }) => {

  const [ product, setProduct ] = useState(products[0])
  const [ quantity, setQuantity ] = useState(1)

  useEffect(() => {
    setProduct(products?.filter(prod => prod.id === id))
  },[id])

  return (
    <ProductWrapper>
      <Image background={ product[0]?.cover }/>
      <ProductInfo>
        <ProductTitle>
          { title }
        </ProductTitle>
        <Reference>{ product[0]?.label }</Reference>
        <PriceBox>
          <ImPriceTags />
          { product[0]?.price * quantity } MAD
        </PriceBox>
        <Quantity>
            <ChangeQuantityButton onClick={ () => { quantity > 0 && setQuantity( quantity - 1 ) } }> - </ChangeQuantityButton>
                <ProductTitle>{ quantity }</ProductTitle>
            <ChangeQuantityButton onClick={ () => { setQuantity( quantity + 1 ) } }> + </ChangeQuantityButton> 
        </Quantity>
      </ProductInfo>
    </ProductWrapper>
  )
}

export default Product