import { PageWrapper, CenteredContent, TopSection, MeSection, Avatar, 
  PersonInfoWrapper, Name, Username, Role, Form, ErrorAlert,
  LongField, Field, Raw, Input, Label, Submit
 } from "./style/Styles"

import { useForm } from "react-hook-form";

import { useUserStore } from "../../../models/user";
import { extended } from "../../../utils/axios/axois";
import { useEffect } from "react";

const Profile = () => {

  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  
  const user = useUserStore();

  const onSubmit = async (data) => {
    console.log(data)
    
    const payload = {
      email: data.email_update,
      firstname: data.firstName_update,
      lastname: data.lastName_update,
      address: data.address_update
    }

    // console.log(payload)
    const result = extended.post("/user/update", payload, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    console.log(result)
  } 
useEffect(() => {

  reset({
    username_update: user?.user.username,
    firstName_update: user?.user.firstname,
    lastName_update: user?.user.lastname
  })

} ,[])

  return (
    <PageWrapper>
      <CenteredContent>
        <TopSection>
          <MeSection>
            <Avatar src="https://i.imgur.com/bnIsPVp.jpg" />
            <PersonInfoWrapper>
              <Name>{ user?.getFullName }</Name>
              <Username>username: @{user?.user.username}</Username>
            </PersonInfoWrapper>
          </MeSection>
          <Role>{ user?.getRole }</Role>
        </TopSection>
        <Form onSubmit={ handleSubmit(onSubmit) }>
          <LongField>
            <Label>Email</Label>
            <Input type="text" placeholder="email" {...register("email_update", {
              required: true
            })} />
            <ErrorAlert>{ errors.email_update?.type === "required" && "Field is required" }</ErrorAlert>
          </LongField>
          <Raw>
            <Field>
              <Label>First name</Label>
              <Input type="text" placeholder="first name" {...register("firstName_update", {
              required: true
            })} />
              <ErrorAlert>{ errors.firstName_update?.type === "required" && "Field is required" }</ErrorAlert>
            </Field> 
            <Field>
              <Label>Last name</Label>
              <Input type="text" placeholder="last name" {...register("lastName_update", {
              required: true
            })} />
              <ErrorAlert>{ errors.lastName_update?.type === "required" && "Field is required" }</ErrorAlert>
            </Field>
          </Raw>
          <LongField>
            <Label>Address</Label>
            <Input type="text" placeholder="address" {...register("address_update", {
              required: true
            })} />
            <ErrorAlert>{ errors.address_update?.type === "required" && "Field is required" }</ErrorAlert>
          </LongField>
          <LongField>
            <Submit type="submit" value="save changes" />
          </LongField>
        </Form>
      </CenteredContent>
    </PageWrapper>
  )
}

export default Profile