import { 
  Wrapper, Modal, Field, 
  Label, Input, Form, 
  LogoWrapper, Submit, ParagraphWrapper, 
  LicenceInput, Checkbox, ErrorSpan
} from "./SubComponents"

import { PrimaryColors, Paragraph, TextLink } from "../../../../utils"
import Logo from '../../../logo/Logo'

import { useForm } from "react-hook-form";
import { useUserStore } from "../../../../models/user";

const Signup = () => {

  const { handleSubmit, register, formState: { errors } } = useForm()

  const user = useUserStore();

  const onSubmit = async (data) => {

    //TODO: add email field in database

    const payload = {
        firstname : data.firstname,
        lastname : data.lastname,
        role : "USER",
        address : data.address,
        username : data.username,
        password : data.password
      }

    await user.register(payload);
    //console.log(data)
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
              <Label htmlFor="firstName">firstName: </Label>
                <Input
                  id="firstName" type="text" placeHolder="Your Firstname?" 
                  { ...register("firstname",{ required: true }) }
                />
            </Field>
            <ErrorSpan>{ ((errors.firstname?.type === 'required') && "Please provide a your name.") }</ErrorSpan>
            <Field>
              <Label htmlFor="lastname">lastname: </Label>
                <Input
                  id="lastname" type="text" placeHolder="Your Lastname?" 
                  { ...register("lastname",{ required: true }) }
                />
            </Field>
            <ErrorSpan>{ ((errors.last?.type === 'required') && "Please provide a your name.") }</ErrorSpan>
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
            <Field>
              <Label htmlFor="address">address: </Label>
              <Input id="address" type="text" 
                { ...register("address",{ required: true }) }
              />
            </Field>
            <ErrorSpan>{ ((errors.password?.type === 'required') && "Please provide an Address.") || (errors.password?.message)  }</ErrorSpan>
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

