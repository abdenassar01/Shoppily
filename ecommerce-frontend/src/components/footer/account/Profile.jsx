import { ProfileWrapper, Img, StyledLink } from './SubComp';
import { Paragraph } from '../../../utils';


const Profile = () => {
  return (
    <ProfileWrapper>
        <Paragraph style={{fontStyle: 'normal'}}>Welcome Mr. <span style={{fontWeight: 'bold'}}>{`Abde Nassar`}</span></Paragraph>
        <StyledLink to={`account/10`}>
            <Img 
                src="https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/131893780_1232921263775320_7424924083894815827_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG_d4HEcorROtlezBSBMQT1lNUVyXFn5ICU1RXJcWfkgEQsGqrHJygoQsVP-cxLLS_py_VKWRsIa4vDuKCaUoR0&_nc_ohc=7qbL8e7iqB4AX9yi5Hm&_nc_ht=scontent.ffez1-1.fna&oh=00_AT9K_kktisvjXhDQ3Wv8CeGsDYkK6KkkP6G64ZjgWj_Qzg&oe=62ADC907" 
                alt="profile image" 
            />
            See profile
        </StyledLink>
    </ProfileWrapper>
  )
}

export default Profile