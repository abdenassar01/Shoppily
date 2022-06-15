import { Wrapper, Nav, Account, MobileNav, 
  ExtendedMenu, NavTab, AccountWrapper
} from './SubComponents';
import { PrimaryLink } from '../../utils'

import { RiAccountPinCircleLine } from 'react-icons/ri'
import { FaShopify, FaHome, FaShoppingBasket, FaUserPlus } from 'react-icons/fa'
import { BiLogIn, BiMenu } from 'react-icons/bi'

import { TextColors } from '../../utils'

import Logo from '../logo/Logo'
import { useState } from 'react';

const Navbar = () => {

  const [ isExtebded, setIsExtebded ] = useState(false);

  const ToggleExtendedMenu = () => {
    setIsExtebded(!isExtebded)
  }
  
  return (
    <>
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
          <PrimaryLink to="/cart" color={TextColors["textInverted"]}>
            <FaShoppingBasket size={20}/>
            <h2>Cart </h2>
          </PrimaryLink> 
          <PrimaryLink to="/me" color={TextColors["textInverted"]}>
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
      <MobileNav>
        <NavTab>
          <Logo color={TextColors["textInverted"]}/>
          <BiMenu size={32} color={"white"} onClick={ ToggleExtendedMenu } />
        </NavTab>
        {
          isExtebded && 
          <ExtendedMenu>
            <PrimaryLink to="/" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu} >
                <FaHome size={20}/>
                <h2 >Home </h2>
              </PrimaryLink>
              <PrimaryLink to="/sell" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu}>
                <FaShopify size={20}/>
                <h2>Start selling </h2>
              </PrimaryLink>
              <PrimaryLink to="/cart" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu}>
                <FaShoppingBasket size={20}/>
                <h2>Cart </h2>
              </PrimaryLink> 
              <PrimaryLink to="/me" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu}>
                <RiAccountPinCircleLine size={20}/>
                <h2>Account</h2>
              </PrimaryLink>
              <AccountWrapper>
              <PrimaryLink to="/login" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu}>
                <BiLogIn size={20}/>
                <h2>Login</h2>
              </PrimaryLink>
              <PrimaryLink to="/signup" color={TextColors["textInverted"]} onClick={ToggleExtendedMenu}>
                <FaUserPlus size={20}/>
                <h2>SignUp</h2>
              </PrimaryLink>
            </AccountWrapper>
        </ExtendedMenu>
        }
      </MobileNav>
    </>
  )
}

export default Navbar