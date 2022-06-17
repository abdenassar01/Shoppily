import { Container, CartsWrapper, Title } from "./styles/Styles";

import ProductCard from "../../../../utils/card/ProductCard";

import { useQuery } from "react-query";

import { extended } from "../../../../utils/axios/axois";
import Loading from "../../../../utils/loading/Loading";
import { useEffect, useState } from "react";

const ListingsByCategory = ({ title, id }) => {

    const [ listings, setListings ] = useState([]);
    
    const getListings = async () => {
        const result = await extended.get(`/listing/categories/${id}`)
        setListings(result.data.content)
    } 
    
    useEffect(() => { 
      getListings()
    }, []) 
    
  return (
    <Container>
      <Title>{title}</Title>
      <CartsWrapper>
        {
          listings?.map(lst => <ProductCard key={ lst.id } listing={ lst } />)
        }
      </CartsWrapper>
    </Container>
    
  )
}

export default ListingsByCategory