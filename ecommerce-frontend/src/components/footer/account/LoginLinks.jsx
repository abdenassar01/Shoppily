import { LoginWrapper, StyledLink, LinksWrapper } from './SubComp';

import { Paragraph } from '../../../utils';

const LoginLinks = () => {
  return (
    <LoginWrapper>
        <Paragraph bold>Join us</Paragraph>
        <LinksWrapper>
            <StyledLink to={`/signup`}>
                Join
            </StyledLink>
            <StyledLink to={`/login`}>
                Log in
            </StyledLink>
        </LinksWrapper>     
    </LoginWrapper>
  )
}

export default LoginLinks