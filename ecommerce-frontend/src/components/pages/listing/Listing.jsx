import { PageWrapper, ChangeReferenceButton, Reference, 
  Heading, ButtonsWrapper, AddToCart, AddToCartButton, 
  Description, DescriptionWrapper, CentredBox, AddFeedback,
  TextArea, Submit, FlexEnd
} from "./styles/Styles";

import Product from "./product/Product";
import Feedbacks from "./feedbacks/Feedbacks";
import Loading from "../../../utils/loading/Loading";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { extended } from "../../../utils/axios/axois";
import { useState } from "react";

import { useUserStore } from "../../../models/user";
import { useCart } from "../../../models/cart";

const Listing = () => {

  const [ shownProdId, setShownProdId ] = useState(0);

  const param = useParams();

  const user = useUserStore();
  const cart = useCart();

  const { isLoading, error, data } = useQuery("fetch Listing Data", async () => {
    const result = await extended.get(`/listing/${ param.id }`);
    setShownProdId(result?.data.products[0]?.id)
    return result;
  });

  const addToCart = () => {
    const item = {
        id: data?.data.id,
        label: data?.data.title,
        cover: data?.data.products[0]?.cover,
        reference: data?.data.products[0]?.label,
        price: data?.data.products[0]?.price,
        quantity: 1
    }
    cart.addToCart( item )
    alert("added to cart succesfully")
  }

  if(isLoading) return <Loading size={80} />
  if(error) return <Navigate to="/error" replace />


  return (
    <PageWrapper>
      <Product products={ data?.data.products } id={ shownProdId } title={ data?.data.title } />
        <Reference>
          <Heading>Reference</Heading>
          <ButtonsWrapper>
            {
              data?.data.products?.map(
                prod => 
                  <ChangeReferenceButton key={ prod.id } onClick={ () => setShownProdId(prod.id) } >
                    { prod?.label }
                  </ChangeReferenceButton> )
            }
          </ButtonsWrapper>          
        </Reference>
        <AddToCart>
          <AddToCartButton onClick={ addToCart }>Add To Cart</AddToCartButton>
        </AddToCart>      
        <DescriptionWrapper>
          <CentredBox>
            <Heading>Description</Heading>
            <Description dangerouslySetInnerHTML={{__html: data?.data.description }} />
          </CentredBox>
        </DescriptionWrapper>
        <Feedbacks feedbacks={ data?.data.feedbacks }  />
        <AddFeedback>
          <CentredBox>
            <TextArea placeholder="Add Type your feedback..." />
            <FlexEnd>
              <Submit disabled={ !user.isAuthentificated }>
                Add Feedback
              </Submit>
            </FlexEnd>     
          </CentredBox>
        </AddFeedback>
    </PageWrapper>
  )
}


export default Listing