import ProductCard from "../../../../utils/card/ProductCard";
import { CategoryWrapper, BigHeading, 
  ListingsWrapper, HelperText
 } from "./styles/Styles";

import Loading from "../../../../utils/loading/Loading";

import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import { extended } from "../../../../utils/axios/axois";

const Category = () => {

  const param = useParams();

  const { isLoading, error, data } = useQuery("fetchListingByCategory", async () => {
      const result = await extended.get(`/listing/categories/${ param?.id }`);
      return result?.data;
  });

  if(isLoading) return <Loading size={ 70 } />
  if(error) return <Navigate to="/error" />

  return (
    <CategoryWrapper>
        <BigHeading>{  data?.content[0]?.category.label }</BigHeading>
        <HelperText>{  data?.content.length === 0 && "This category has no listings"  }</HelperText>
        <ListingsWrapper>
          {
            data?.content.map(listing => <ProductCard listing={ listing } key={ listing?.id } />)
          }
        </ListingsWrapper>
    </CategoryWrapper>
  )
}

export default Category