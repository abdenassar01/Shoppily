import { ProfileWrapper, Avatar, NameText, Logout } from "../SubComponents";
import { MdOutlineLogout } from "react-icons/md";
import { useUserStore } from "../../../models/user";

const Profile = () => {

    const user = useUserStore();

    const logout = () => {
        user.logout()
        user.setIsAuthorized(false)
    }

  return (
    <ProfileWrapper>
        <Avatar src="https://i.imgur.com/n9rFctg.png" alt="user avatar" draggable={ false } />
        <Logout onClick={ logout }>
            <NameText>Log out</NameText>
            <MdOutlineLogout color="white" size={ 16 } />
        </Logout>
    </ProfileWrapper>
  )
}

export default Profile