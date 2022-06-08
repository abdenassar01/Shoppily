import { PrimaryLink } from '../../utils'

import { RiAccountPinCircleLine } from 'react-icons/ri'
import { FaShopify, FaHome, FaShoppingBasket, FaUserPlus } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'

import { TextColors } from '../../utils'

import { Wrapper, Nav, Account } from './SubComponents';
import Logo from '../logo/Logo'

const Navbar = () => {
  return (
    <Wrapper>
      <Logo color={TextColors["textInverted"]}/>
      <Nav>
        <PrimaryLink to="/" color={TextColors["textInverted"]} >
          <FaHome size={20}/>
          <h2 >Home </h2>
        </PrimaryLink>
        <PrimaryLink to="/sell" color={TextColors["textInverted"]}>
          <FaShopify size={20}/>
          <h2>Start selling </h2>
        </PrimaryLink>
        <PrimaryLink to="/" color={TextColors["textInverted"]}>
          <FaShoppingBasket size={20}/>
          <h2>Cart </h2>
        </PrimaryLink> 
        <PrimaryLink to="/" color={TextColors["textInverted"]}>
          <RiAccountPinCircleLine size={20}/>
          <h2>Account</h2>
        </PrimaryLink>
      </Nav>
      <Account>
        <PrimaryLink to="/login" color={TextColors["textInverted"]}>
          <BiLogIn size={20}/>
          <h2>Login</h2>
        </PrimaryLink>
        <PrimaryLink to="/signup" color={TextColors["textInverted"]}>
          <FaUserPlus size={20}/>
          <h2>SignUp</h2>
        </PrimaryLink>
      </Account>
    </Wrapper>
  )
}

export default Navbar