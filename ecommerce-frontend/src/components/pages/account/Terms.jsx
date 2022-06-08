import styled from 'styled-components'

const Terms = () => {
  return (
    <Wrapper>
        <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugit aut culpa qui. Quaerat, saepe, corporis nemo adipisci recusandae alias quasi mollitia fugiat aut vitae corrupti. Illo nam maxime quibusdam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto enim doloremque fuga illo dolores deleniti, nam quaerat quibusdam ducimus magnam soluta, labore nulla dicta et commodi libero minus, aut animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis aspernatur minus et vel non sint ullam explicabo, nam consequuntur eum reprehenderit quibusdam tempora aperiam facilis! Sit consequatur error ex.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellat et sint dolor natus doloremque cum laboriosam officia molestias explicabo. Consectetur illo recusandae cupiditate sunt aut ullam officiis neque ipsum?
        </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 100px 20px; 
    display: flex;
    justify-content: center;
`

const Text = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color: #eeeeee;
`

export default Terms