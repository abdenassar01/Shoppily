import { FormSection, SmallHeading, Text,
    Form ,Field, Label, Input, ErrorMessage,
    Submit, FormTextWrapper
} from "./style/Styles";

import { useForm } from "react-hook-form";

const StoreForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <FormSection>
        <FormTextWrapper>
            <SmallHeading>Set up your e-commerce store in a flash, it's easy and free!</SmallHeading>
            <Text color="#555555">after submitting this form the data will be transfered to our team to process it manualy and give you access to sell on Shoppily</Text>
        </FormTextWrapper>
        <Form onSubmit={ handleSubmit(onSubmit) }>
            <Field>
                <Label htmlFor="store_name">
                    Store name:
                </Label>
                <Input 
                    type="text" placeholder="Store name..." id="store_name" 
                    {...register("storeName", { required: true, maxLength: {
                        value: 15,
                        message: "Store name can't be more then 15 charactere"
                    } })}
                />
                <ErrorMessage>{((errors.storeName?.type === 'required') && "Please provide a name for your store.") || (errors.storeName?.message)}</ErrorMessage>
            </Field>
            <Field>
                <Label htmlFor="mail">
                    E-mail:
                </Label>
                <Input type="text" 
                    placeholder="example@mail.com" id="mail" 
                    {...register("emailStore", { required: true, 
                        pattern: {
                          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Please provide a valid email"
                      }})}
                />
                <ErrorMessage>{ ((errors.emailStore?.type === 'required') && "Please provide an email.") || (errors.emailStore?.message) }</ErrorMessage>
            </Field>
            <Field>
                <Label htmlFor="store_password">
                    Store name:
                </Label>
                <Input type="password" 
                    placeholder="Password" id="store_password" 
                    { ...register("passwordStore",{ required: true }) }
                />
                <ErrorMessage>{ ((errors.passwordStore?.type === 'required') && "Please provide your password.") }</ErrorMessage>
            </Field>
            <Submit type="submit" value="Request Join"/>
        </Form>
    </FormSection>
  )
}

export default StoreForm