import { Wrapper, Modal, Field, Label, Input, InputWrapper, Form, LogoWrapper, Icon, Submit} from "./SubComponents"
import { useState } from "react"
import { PrimaryColors, H2, Paragraph, TextLink } from "../../../../utils"
import Logo from '../../../logo/Logo'

import { RiLockPasswordFill, RiAccountBoxFill } from 'react-icons/ri';

const Login = () => {

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
        <Modal>
          <LogoWrapper>
            <Logo color={ PrimaryColors[100] }/>
          </LogoWrapper>
          <H2 bold color={ props => props.theme.main}>Welcome Back</H2>
          <Form method="post">
            <Field>
              <Label for="username">Username: </Label>
              <InputWrapper>
                <Icon>
                  <RiAccountBoxFill color={ PrimaryColors[100] } size={20}/>
                </Icon>
                <Input name="username" id="username" type="text" onChange={ (e) => setUsername(e.target.value) } placeHolder="Username?" value={username}/>
              </InputWrapper>
            </Field>
            <Field>
              <Label for="password">Password: </Label>
              <InputWrapper>
                <Icon>
                  <RiLockPasswordFill color={ PrimaryColors[100] } size={20}/>
                </Icon>
                <Input name="password" id="password" type="password" onChange={ (e) => setPassword(e.target.value) } placeHolder="Password?" value={password}/>
              </InputWrapper>
            </Field>
            <TextLink to="/" color={ props => props.theme.main }> 
              <Paragraph bold>Forget Password? </Paragraph>
            </TextLink>
            <Submit type="submit" value="Login" onClick={ (e) => handleSubmit(e) }/>
          </Form>
          <Paragraph bold>Don't have an account? <TextLink to="/signup" color={ props => props.theme.main }>Create one</TextLink></Paragraph>
        </Modal>
    </Wrapper>
  )
}

export default Login