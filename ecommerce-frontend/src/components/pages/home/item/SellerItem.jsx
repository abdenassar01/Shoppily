import { Container, Avatar, Title } from "./styles/Styles"

const SellerItem = ({ title, avatar, id }) => {

  return (
    <Container to={`store/${id}`}>
        <Avatar src={ avatar ? avatar : "https://i.imgur.com/Q134GFD.png" }/>
        <Title>{ title }</Title>
    </Container>
  )
}


export default SellerItem