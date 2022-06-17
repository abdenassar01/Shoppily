import { SearchWrapper, TopSection, ListingWrapper,
  SearchBar, SearchButton, Input, Icon
} from "./styles/Styles";

import Logo from "../../../logo/Logo";
import Loading from "../../../../utils/loading/Loading";
import ProductCard from "../../../../utils/card/ProductCard";

import { extended } from "../../../../utils/axios/axois";

import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Search = () => {

  const param = useParams();

  const [ query, setQuery ] = useState(param.q);

  const { isLoading, error, data } = useQuery("getListingBySearch", async () => {
    const result = await extended.get(`/listing/title?title=${query}`);
    console.log(result.data)
    return result.data;
  })

  if(isLoading) return <Loading size={ 70 } />
  if(error) return <Navigate to="/error" replace />

  return (
    <SearchWrapper>
      <TopSection>
        <Logo />
        <SearchBar>
          <Icon>
            <IoMdSearch size={30} />
          </Icon>
          <Input value={ query }  onChange={ (e) => setQuery(e.target.value) } />
        </SearchBar>
        <SearchButton to={`/search/q=${query}`}>Search</SearchButton>
      </TopSection>
      <ListingWrapper>
        { 
          data?.map(ele => <ProductCard listing={ ele } />)
        }
      </ListingWrapper>
    </SearchWrapper>
  )
}

export default Search