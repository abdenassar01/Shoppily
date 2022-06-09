import StoreForm from "./StoreForm";
import  { PageWrapper, MainSection, MainIllustration, BigHeading,
      MeduimHeading, Text, TextWrapper
   } from "./style/Styles";


const BecomeSeller = () => {
  return (
    <PageWrapper>
      <MainSection>
        <BigHeading>
          Open Your Personalized Store
        </BigHeading>
        <MainIllustration src="https://i.imgur.com/kg4z633.png" alt="open a store on shoppily" />
      </MainSection>
      <MainSection color="#E0E0E0">
        <MainIllustration src="https://svgshare.com/i/iA3.svg" alt="Shoppily Store" />
        <TextWrapper>
          <MeduimHeading>Selling as a business? We make it easy</MeduimHeading>
          <Text>
            We've got powerful tools to help you manage your inventory and orders, track your sales, and build your brand.
          </Text>
        </TextWrapper>
      </MainSection>
      <StoreForm />
    </PageWrapper>
  )
}

export default BecomeSeller