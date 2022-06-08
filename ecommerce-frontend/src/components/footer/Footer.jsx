import { FooterWrapper, ContentWrapper, Left, Right, 
  Header,  ContentBox, RouteLink, SocialMedia, A, 
  H2, LinksWrapper, AccountDetail
} from './SubComponents';

import Profile from './account/Profile';
import LoginLinks from './account/LoginLinks';

import Logo from '../logo/Logo';
import {TextColors} from '../../utils';

import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import Copyright from './copyright/Copyright';

const Footer = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => { setIsLoggedIn(isLoggedIn); } , [isLoggedIn])

  return (
    <FooterWrapper>
      <Logo color={TextColors["textInverted"]}/>
      <ContentWrapper>
        <Left>
          <Header>Who We Are?</Header>
          <ContentBox>
            we sell the best products for you            
            <br />
            <RouteLink to="/products">
              About us
            </RouteLink> 
            <br />
            <RouteLink to="/products">
              Contact us
            </RouteLink>
            <br />
            <RouteLink to="/products">
              Become a seller
            </RouteLink>
            <SocialMedia>
              <H2>Find us on</H2>
              <LinksWrapper>
                <A target="_blank" href="https://github.com/abdenassar01" iconColor="#4267B2">
                  <FaFacebookF size="20" />
                </A>
                <A target="_blank" href="https://github.com/abdenassar01" iconColor="#00acee">
                  <FaTwitter size="20" />
                </A>
                <A target="_blank" href="https://github.com/abdenassar01" iconColor="#0072b1">
                  <FaLinkedin size="20" />
                </A>
                <A target="_blank" href="https://github.com/abdenassar01" iconColor="#c4302b">
                  <FaYoutube size="20"/>
                </A>
              </LinksWrapper>     
            </SocialMedia>
          </ContentBox>
        </Left>
        <Right>
          <Header>Customer Service</Header>
          <ContentBox>
            How can we help you?
            <br />
            <RouteLink to="/products">
              Repport a problem
            </RouteLink> 
            <br />
            <RouteLink to="/products">
              Termes of use
            </RouteLink>
            <br />
            <RouteLink to="/products">
              Privacy Policy
            </RouteLink>
            <AccountDetail>
                {isLoggedIn ? <Profile /> : <LoginLinks />}
            </AccountDetail>
          </ContentBox>
        </Right>
      </ContentWrapper>
      <Copyright />
    </FooterWrapper>
  )
}

export default Footer