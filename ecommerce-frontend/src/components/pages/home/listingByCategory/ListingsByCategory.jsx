import { Container, CartsWrapper, Title } from "./styles/Styles";

import ProductCard from "../../../../utils/card/ProductCard";

const ListingsByCategory = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CartsWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </CartsWrapper>
    </Container>
    
  )
}

export default ListingsByCategory