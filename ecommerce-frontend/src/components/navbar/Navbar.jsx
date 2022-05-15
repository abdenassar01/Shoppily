import { PrimaryColors, LogoLink, PrimaryLink } from '../../utils'

import { RiShoppingCartFill, RiAccountPinCircleLine } from 'react-icons/ri'
import { FaShopify, FaHome, FaShoppingBasket, FaUserPlus } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'

import { Wrapper, Logo, Nav, Account } from './SubComponents';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoLink to="/" >
          <h2>Shoppily</h2>
            <RiShoppingCartFill size={32}/>
        </LogoLink>
      </Logo>    
      <Nav>
        <PrimaryLink to="/" >
          <FaHome size={20}/>
          <h2 >Home </h2>
        </PrimaryLink>
        <PrimaryLink to="/" >
          <FaShopify size={20}/>
          <h2>Start selling </h2>
        </PrimaryLink>
        <PrimaryLink to="/" >
          <FaShoppingBasket size={20}/>
          <h2>Cart </h2>
        </PrimaryLink> 
        <PrimaryLink to="/" >
          <RiAccountPinCircleLine size={20}/>
          <h2>Account</h2>
        </PrimaryLink>
      </Nav>
      <Account>
        <PrimaryLink to="/login" >
          <BiLogIn size={20}/>
          <h2>Login</h2>
        </PrimaryLink>
        <PrimaryLink to="/signup" >
          <FaUserPlus size={20}/>
          <h2>SignUp</h2>
        </PrimaryLink>
      </Account>
    </Wrapper>
  )
}

export default Navbar