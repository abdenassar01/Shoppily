import Product from "./product/Product";
import { PageWrapper, CentredContent, TopSection,
    MainHeading, RemoveAllButton, MainSection, Hr,
    CheckoutWrapper, Checkout, CheckoutHeading, 
    ItemsCount, TotalPrice, CheckoutButton,
    ElementWrapper
 } from "./styles/Styles";

const Cart = () => {
  return (
    <PageWrapper>
        <CentredContent>
            <TopSection>
                <MainHeading>Shopping Cart</MainHeading>
                <RemoveAllButton>Remove all</RemoveAllButton>
            </TopSection>
            <MainSection>
                <Product />
                <Product />
            </MainSection>
            <Hr />
            <CheckoutWrapper>
                <ElementWrapper>
                    <Checkout>
                        <div>
                            <CheckoutHeading>SubTotal</CheckoutHeading>
                            <ItemsCount>2 items</ItemsCount>
                        </div>
                        <TotalPrice>37.00 $</TotalPrice>
                    </Checkout>
                    <CheckoutButton>Checkout</CheckoutButton>
                </ElementWrapper>   
            </CheckoutWrapper>
        </CentredContent>
    </PageWrapper>
  )
}

export default Cart