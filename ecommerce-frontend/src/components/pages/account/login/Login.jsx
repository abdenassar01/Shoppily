import { Wrapper, Modal, Field, Label, Input, 
  InputWrapper, Form, LogoWrapper, Icon, Submit,
  ErrorSpan
} from "./SubComponents";

import { PrimaryColors, H2, Paragraph, TextLink, Alert } from "../../../../utils"
import Logo from '../../../logo/Logo'
import { useForm } from "react-hook-form"

import { RiLockPasswordFill, RiAccountBoxFill } from 'react-icons/ri';

import { useUserStore } from "../../../../models/user";
import { useState } from "react";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const user = useUserStore();

  const [ message, setMessage ] = useState("Testing Message")

  const onSubmit = async (data) => {
    const payload = {
      username: data.username_login,
      password: data.password_login
    }
    user.login(payload)
  }

  return (
    <Wrapper>
      <Alert message={ message } setMessage={ setMessage } status="success" />
        <Modal>
          <LogoWrapper>
            <Logo color={ PrimaryColors[100] }/>
          </LogoWrapper>
          <H2 bold color={ props => props.theme.main}>Welcome Back</H2>
          <Form onSubmit={ handleSubmit(onSubmit) }>
            <Field>
              <Label htmlFor="username">Username: </Label>
              <InputWrapper>
                <Icon>
                  <RiAccountBoxFill color={ PrimaryColors[100] } size={20}/>
                </Icon>
                <Input 
                  {...register("username_login", { required: true })} id="username_login" type="text" placeHolder="Your username?"
                />
              </InputWrapper>
            </Field>
            <ErrorSpan>{ ((errors.username_login?.type === 'required') && "Please provide a username.") }</ErrorSpan>
            <Field>
              <Label htmlFor="password">Password: </Label>
              <InputWrapper>
                <Icon>
                  <RiLockPasswordFill color={ PrimaryColors[100] } size={20}/>
                </Icon>
                <Input  {...register("password_login", 
                { required: true })} id="password_login" type="password" placeHolder="Your password?"
                />
              </InputWrapper>
            </Field>
            <ErrorSpan>{ ((errors.password_login?.type === 'required') && "Please provide a password.") }</ErrorSpan>
            <TextLink to="/" color={ props => props.theme.main }> 
              <Paragraph bold>Forget Password? </Paragraph>
            </TextLink>
            <Submit type="submit" value="Login" />
          </Form>
          <Paragraph bold>Don't have an account? <TextLink to="/signup" color={ props => props.theme.main }>Create one</TextLink></Paragraph>
        </Modal>
    </Wrapper>
  )
}

export default Login