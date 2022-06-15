import { Container, Avatar, Title } from "./styles/Styles"

const SellerItem = () => {

  return (
    <Container to={`store/${12}`}>
        <Avatar src="https://i.imgur.com/hrGzPIf.png"/>
        <Title>Seller</Title>
    </Container>
  )
}


export default SellerItem