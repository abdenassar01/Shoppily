import { HomePageWrapper, TopSection, LegendSection, 
  SearchButton,LogoWrapper,
  MiddleBox, Image, Top, Bottom,
  Heading, SellersSlider, 
} from "./styles/Styles";

import Category from "../../categories/Category";
import SearchBar from "../../search/SearchBar"
import Logo from "../../logo/Logo"
import Loading from "../../../utils/loading/Loading"

import SellerItem from "./item/SellerItem";

import ListingsByCategory from "./listingByCategory/ListingsByCategory";
import { withTheme } from "styled-components";
import { extended } from "../../../utils/axios/axois";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Home = (props) => {

  const [ query, setQuery ] = useState("");

  const { isLoading, error, data } = useQuery("getStores", async () => {
      const result = await extended.get("/store/all");
      return result?.data.content;
  })

  if( isLoading ) return <Loading size={ 80 } />
  if( error ) return <Navigate to="/error" replace />

  return (
    <HomePageWrapper>
        <TopSection>
          <LogoWrapper>
            <Logo color={ props.theme.main } size={30} />
          </LogoWrapper>
          <SearchBar value={ query } name="query" onChange={(e) => setQuery(e.target.value) } />
          <SearchButton to={`/search/${query}`} >Search</SearchButton>
        </TopSection>
        <LegendSection>
          <Category />
          <MiddleBox>
            <Top>
              <Image src="https://i.imgur.com/0vuC1mu.jpg" />
            </Top>
            <Bottom>
              <Heading>Our Stores</Heading>
              <SellersSlider>
                {
                  data?.map( store => 
                    <SellerItem key={ store.id } title={ store.name } id={ store.id } />
                  )
                }
              </SellersSlider>
            </Bottom>
          </MiddleBox>
        </LegendSection>
        <ListingsByCategory title="Men Fashion" id={ 85 } />
        <ListingsByCategory title="Women Fashion" id={ 86 } />
        <ListingsByCategory title="Computer, Office & Security" id={ 88 } />
        <ListingsByCategory title="Sporting Goods" id={ 92 } />
    </HomePageWrapper>
  )
}

export default withTheme(Home) 