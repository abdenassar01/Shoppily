import { 
  Wrapper, Modal, Field, 
  Label, Input, Form, 
  LogoWrapper, Submit, ParagraphWrapper, 
  LicenceInput, Checkbox, ErrorSpan
} from "./SubComponents"

import { PrimaryColors, Paragraph, TextLink } from "../../../../utils"
import Logo from '../../../logo/Logo'

import { useForm } from "react-hook-form";

const Signup = () => {

  const { handleSubmit, register, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Wrapper>
        <Modal>
          <LogoWrapper>
            <Logo color={ PrimaryColors[100] }/>
          </LogoWrapper>
          <ParagraphWrapper>
            <Paragraph bold>Already have an account? 
                <TextLink to="/login" color={ props => props.theme.main }>
                  log in
                </TextLink>
            </Paragraph>
          </ParagraphWrapper>
          <Form onSubmit={ handleSubmit(onSubmit) }>
            <Field>
              <Label htmlFor="fullname">fullname: </Label>
                <Input
                  id="fullname" type="text" placeHolder="Your Fullname?" 
                  { ...register("fullname",{ required: true }) }
                />
            </Field>
            <ErrorSpan>{ ((errors.fullname?.type === 'required') && "Please provide a your name.") }</ErrorSpan>
            <Field>
              <Label htmlFor="email">email: </Label>
                <Input 
                  {...register("email",{ required: true, 
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please provide a valid email"
                  }})}
                  id="email" type="email" placeHolder="Your E-mail?" 
                />
            </Field>
            <ErrorSpan>{ ((errors.email?.type === 'required') && "Please provide an email.") || (errors.email?.message) }</ErrorSpan>
            <Field>
              <Label htmlFor="username">username: </Label>
                <Input
                  id="username" type="text" placeHolder="Your username?" 
                  { ...register("username",{ required: true }) }
                />
            </Field>
            <ErrorSpan>{ ((errors.username?.type === 'required') && "Please provide a username.") }</ErrorSpan>
            <Field>
              <Label htmlFor="password">password: </Label>
              <Input id="password" type="password" 
                { ...register("password",{ required: true, minLength: {
                  value: 8,
                  message: "Your password should be at least 8 characteres long"
                } }) }
              />
            </Field>
            <ErrorSpan>{ ((errors.password?.type === 'required') && "Please provide a password.") || (errors.password?.message)  }</ErrorSpan>
            <LicenceInput>
              <Checkbox id="licence" type="checkbox" 
                { ...register("liecence",{ required: true }) }/> 
                <label htmlFor="licence">
                  I have read and agreed on the &nbsp;
                  <TextLink to="/terms" color={ props => props.theme.main }>
                    terms of use
                  </TextLink>
                </label>
            </LicenceInput>
            <ErrorSpan>{ ((errors.liecence?.type === 'required') && "You should agree on terms of use.") }</ErrorSpan>
            <Submit type="submit" value="Login" onClick={ (e) => handleSubmit(e) }/>
          </Form>
        </Modal>
    </Wrapper>
  )
}

export default Signup;

