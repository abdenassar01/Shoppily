import { PageWrapper, ContentWrapper, Model, Form, Field,
        Input, TextArea, Label, Submit, Illustration, ErrorSpan
} from "./SubComponents";

import { Alert } from "../../../utils";

import { useForm } from "react-hook-form";


//image to be uploaded to imagur
import illustration from "./illustration.png" 
import { useState } from "react";

const ContactUs = () => {

  const [ message, setMessage ] = useState("There is no user with the email you spesified");
  const [ status, setStatus ] = useState("warn");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setStatus("warn")
    console.log(data)
  }

  return (
    <>
    { (( message ) && <Alert message={message} status={ status } setMessage={ setMessage }/> ) }
      <PageWrapper>
        <ContentWrapper>
          <Model>
            <Illustration src={ illustration } />
          </Model>
          <Form onSubmit={ handleSubmit(onSubmit) }>
            <Field>
              <Label htmlFor="email" error={ errors?.email_contact }>E-mail</Label>
              <Input type="text"  placeholder="Email?" error={ errors?.email_contact }
                {...register("email_contact", { required: true, 
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Please provide a valid email"
                    }})} />
              <ErrorSpan>{ ((errors.email_contact?.type === 'required') && "Please provide an email.") || (errors.email_contact?.message) }</ErrorSpan>
            </Field>
            <Field>
              <Label htmlFor="object" error={ errors?.object }>Object</Label>
              <Input type="text" error={ errors?.object }
                {...register("object", { required: true,})} placeholder="object?" 
              />
              <ErrorSpan>{ ((errors.object?.type === 'required') && "Please provide an object." ) }</ErrorSpan>
            </Field>
            <Field>
              <Label htmlFor="phone" error={ errors?.phone }>Phone</Label>
              <Input type="text"  placeholder="Phone Number?" error={ errors?.phone }
                {...register("phone", { required: true, maxLength:{
                  value: 12,
                  message: "Please provide a valid phone number."
                }})} 
              />
              <ErrorSpan>{ ((errors.phone?.type === 'required') && "Please provide a phone number.") || errors.phone?.message }</ErrorSpan>
            </Field>
            <Field>
              <Label htmlFor="message" error={ errors?.message }>Message</Label>
              <TextArea rows="5" placeholder="Message?"  
                error={ errors?.message }
                {...register("message", { required: true })}
              />
              <ErrorSpan>{ (errors.message?.type === 'required') && "Please provide a message." }</ErrorSpan>
            </Field>
            <Submit type="submit" value="Submit"/>
          </Form>
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ContactUs