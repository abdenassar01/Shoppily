import { HomePageWrapper, TopSection, LegendSection, 
  SearchButton,LogoWrapper,
  MiddleBox, Image, Top, Bottom,
  Heading, SellersSlider, 
} from "./styles/Styles";

import Category from "../../categories/Category";
import SearchBar from "../../search/SearchBar"
import Logo from "../../logo/Logo"

import { useForm } from "react-hook-form";
import SellerItem from "./item/SellerItem";

import ListingsByCategory from "./listingByCategory/ListingsByCategory";

const Home = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <HomePageWrapper>
        <TopSection>
          <LogoWrapper>
            <Logo color="#2374E1" size={30} />
          </LogoWrapper>
          <SearchBar control={ control } rules={null} name="query" />
          <SearchButton onClick={ handleSubmit(onSubmit) } >Search</SearchButton>
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
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
               <SellerItem />
              </SellersSlider>
            </Bottom>
          </MiddleBox>
        </LegendSection>
        <ListingsByCategory title="Men Fashion"/>
        <ListingsByCategory title="Women Fashion"/>
        <ListingsByCategory title="Phone & Accessories"/>
        <ListingsByCategory title="Computer, Office & Security"/>
        <ListingsByCategory title="Sport"/>
        <ListingsByCategory title="Travel"/>
    </HomePageWrapper>
  )
}

export default Home