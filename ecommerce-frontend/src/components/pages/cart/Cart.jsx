import { observer } from "mobx-react-lite";
import { useCart } from "../../../models/cart";
import Product from "./product/Product";
import { PageWrapper, CentredContent, TopSection,
    MainHeading, RemoveAllButton, MainSection, Hr,
    CheckoutWrapper, Checkout, CheckoutHeading, 
    ItemsCount, TotalPrice, CheckoutButton,
    ElementWrapper
 } from "./styles/Styles";

 import Loading from "../../../utils/loading/Loading"

 import { extended } from "../../../utils/axios/axois"
import { useUserStore } from "../../../models/user";
import { useState } from "react";

const Cart = observer(() => {

    const cart = useCart();
    const user = useUserStore();

    const removeAll = () => {
        cart.removeAll()
    }

    const [ loading, setLoading ] = useState(false)

    const checkout = async () => {
        setLoading(true)
        const payload = {
            user: {
                id: user?.user.id,
            },
            address: user?.user.address,
            order_status: "Awaiting shipping",
            zip_code: 34000,
            date_created: Date.now(),
            price_x_qte: cart?.getTotal,
            quantity: 1,
            products: cart?.getItems
        }
        const result = await extended.put("/order/new", payload, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        cart.removeAll()
        setLoading(false)
    }

    if(loading) return <Loading size={50} />

  return (
    <PageWrapper>
        <CentredContent>
            <TopSection>
                <MainHeading>Shopping Cart</MainHeading>
                <RemoveAllButton onClick={ removeAll }>Remove all</RemoveAllButton>
            </TopSection>
            <MainSection>
                {
                    cart.getItems.map(item =>   <Product item={ item } />)
                }   
            </MainSection>
            <Hr />
            <CheckoutWrapper>
                <ElementWrapper>
                    <Checkout>
                        <div>
                            <CheckoutHeading>SubTotal</CheckoutHeading>
                            <ItemsCount>{ cart.itemsCount } items</ItemsCount>
                        </div>
                        <TotalPrice>{ cart.getTotal } $</TotalPrice>
                    </Checkout>
                    <CheckoutButton onClick={ checkout }>Checkout</CheckoutButton>
                </ElementWrapper>   
            </CheckoutWrapper>
        </CentredContent>
    </PageWrapper>
  )
})

export default Cart