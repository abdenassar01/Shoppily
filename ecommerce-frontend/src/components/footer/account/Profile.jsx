import { ProfileWrapper, Img, StyledLink } from './SubComp';
import { Paragraph } from '../../../utils';

import { useUserStore } from "../../../models/user";
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {

  const user = useUserStore();

  return (
    <ProfileWrapper>
        <Paragraph style={{fontStyle: 'normal'}}>
            Welcome Mr. 
              <span style={{fontWeight: 'bold'}}>{ user?.getFullName }</span>
        </Paragraph>
        <StyledLink to="/me">
            <Img 
                src="https://i.imgur.com/n9rFctg.png" 
                alt="profile image" 
            />
            See profile
        </StyledLink>
    </ProfileWrapper>
  )
})

export default Profile