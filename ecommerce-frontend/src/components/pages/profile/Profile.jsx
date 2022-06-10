import { PageWrapper, CenteredContent, TopSection, MeSection, Avatar, 
  PersonInfoWrapper, Name, Username, Role, Form, ErrorAlert,
  LongField, Field, Raw, Input, Label, Submit
 } from "./style/Styles"

import { useForm } from "react-hook-form";

const Profile = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  } 

  return (
    <PageWrapper>
      <CenteredContent>
        <TopSection>
          <MeSection>
            <Avatar src="https://i.imgur.com/bnIsPVp.jpg" />
            <PersonInfoWrapper>
              <Name>Zayna Seller</Name>
              <Username>username: @zayna_seller</Username>
            </PersonInfoWrapper>
          </MeSection>
          <Role>SELLER</Role>
        </TopSection>
        <Form onSubmit={ handleSubmit(onSubmit) }>
          <LongField>
            <Label>Usename</Label>
            <Input type="text" placeholder="username" {...register("username_update", {
              required: true
            })} />
            <ErrorAlert>{ errors.username_update?.type === "required" && "Field is required" }</ErrorAlert>
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
        {/* Avatar low quality: https://i.imgur.com/bnIsPVp.jpg */}
        {/* Avatar high quality: https://i.imgur.com/9P6nEvs.jpg*/}
    </PageWrapper>
  )
}

export default Profile