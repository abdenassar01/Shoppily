import { 
  Wrapper, Modal, Field, 
  Label, Input, Form, 
  LogoWrapper, Submit, ParagraphWrapper, 
  LicenceInput, Checkbox
} from "./SubComponents"

import { useState } from "react"
import { PrimaryColors, Paragraph, TextLink } from "../../../utils"
import Logo from '../../logo/Logo'


const Signup = () => {
 
  const [ fullName, setFullName ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ licence, setLicence ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
        <Modal>
          <LogoWrapper>
            <Logo color={ PrimaryColors[100] }/>
          </LogoWrapper>
          <ParagraphWrapper>
            <Paragraph bold>Already have an account? 
                <TextLink to="/login" color={ props => props.theme.main}>
                  log in
                </TextLink>
            </Paragraph>
          </ParagraphWrapper>
          <Form method="post">
            <Field>
              <Label for="fullname">fullname: </Label>
                <Input name="fullname" id="fullname" type="text" onChange={ (e) => setFullName(e.target.value) } placeHolder="fullname?" value={fullName} />
            </Field>
            <Field>
              <Label for="email">email: </Label>
                <Input name="email" id="email" type="email" onChange={ (e) => setEmail(e.target.value) } placeHolder="password?" value={email}/>
            </Field>
            <Field>
              <Label for="username">username: </Label>
                <Input name="username" id="username" type="text" onChange={ (e) => setUsername(e.target.value) } placeHolder="username?" value={username}/>
            </Field>
            <Field>
              <Label for="password">password: </Label>
              <Input name="password" id="password" type="password" onChange={ (e) => setPassword(e.target.value) } placeHolder="Password?" value={password}/>
            </Field>
            <LicenceInput>
              <Checkbox name="licence" id="licence" type="checkbox" onChange={ (e) => setLicence(!licence) } value={licence}/> 
                I have read and agreed on the&nbsp;
                <TextLink to="/terms" color={ props => props.theme.main }>
                  terms of use
                </TextLink>
            </LicenceInput>
            <Submit type="submit" value="Login" onClick={ (e) => handleSubmit(e) }/>
          </Form>
        </Modal>
    </Wrapper>
  )
}

export default Signup;

