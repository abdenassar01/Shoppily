
import { PageWrapper, Top, MeSection, Avatar, 
    PersonInfoWrapper, Name, HelperText, 
    MainSection
} from "./styles/Styles";

import ProductCard from "../../../../utils/card/ProductCard";

import Loading from "../../../../utils/loading/Loading";

import { extended } from "../../../../utils/axios/axois";

import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../../models/user";

const Store = () => {

  const user = useUserStore();
  const param = useParams();

  const { isLoading, error, data } = useQuery("fetch_Store", async () => {
    const result = await extended.get(`/store/${param.id}`)
    return result?.data
  })

  if(isLoading) return <Loading size={80} />

  if(error) return <Navigate to="/error" replace />

  return (
        <PageWrapper>
            <Top>
                <MeSection>
                    <Avatar src="https://i.imgur.com/bnIsPVp.jpg" />
                    <PersonInfoWrapper>
                        <Name>{ data?.name }</Name>
                        <HelperText>successfully selled { data?.successfulSells } product.</HelperText>
                        <HelperText>rating: { (data?.rating).toFixed(2) } ⭐</HelperText>
                    </PersonInfoWrapper>
                </MeSection>
            </Top>
            <MainSection>
                {
                    data?.listings.map(listing => <ProductCard listing={ listing }  key={ listing?.id } /> ) 
                }
                <Name>{ ( data.listings.length === 0 ) && "No data to be desplayed." }</Name>
            </MainSection>
        </PageWrapper>
    )
}

export default Store