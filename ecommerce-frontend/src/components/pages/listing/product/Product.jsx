import { useState } from "react"
import { ProductWrapper, Quantity, ChangeQuantityButton,
  Image, ProductInfo, ProductTitle, PriceBox, Reference
} from "./styles/Styles";

import { ImPriceTags } from "react-icons/im";


const Product = () => {

  const [ quantity, setQuantity ] = useState(1)
  const [ price, setPrice ] = useState(110)

  return (
    <ProductWrapper>
      <Image background="https://i.imgur.com/VWJadYo.png"/>
      <ProductInfo>
        <ProductTitle>
          Baseus H1 Hybrid 40dB ANC Wireless Headphones 4-mics ENC Earphone Bluetooth 5.2 40mm Driver HiFi Over the Ear Headsets 70H Time
        </ProductTitle>
        <Reference>Black</Reference>
        <PriceBox>
          <ImPriceTags />
          { price * quantity } MAD
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