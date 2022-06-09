import { PageWrapper, BigHeading, FormWrapper, Form,
    Field, Label, Input, ErrorMessage, EditorBorder, 
    ProductList, ProductListHeading, Submit, 
    SubmitWrapper, AddProdButton
} from "./styles/Styles";

import RichTextEditor from "./editor/RichTextEditor";
import SelectCategory from "./select/SelectCategory";
import ProductInfoForm from "./product/ProductInfoForm";

// import { Alert } from "../../../../utils"

import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaPlusCircle } from "react-icons/fa";

const ListProduct = () => {

    const  [ convertedContent, setConvertedContent ] = useState(null);
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <PageWrapper>
        {/* <Alert /> */}
        <BigHeading>Add  a new Product</BigHeading>
        <FormWrapper>
            <Form onSubmit={ handleSubmit(onSubmit) } >
                <Field>
                    <Label>Title: </Label>
                    <Input type="text" placeholder="Title " 
                        {...register("title", { required: true })}
                    />
                    <ErrorMessage>{ (errors.title?.type === 'required') && "Title is required." }</ErrorMessage>
                </Field>
                <Field>
                    <Label>Description:</Label>
                    <EditorBorder>
                        <RichTextEditor 
                            convertedContent={ convertedContent } 
                            setConvertedContent={ setConvertedContent }  
                        />
                    </EditorBorder>
                </Field>
                <Field>
                    <Label>Title: </Label>
                    <SelectCategory control={ control } name="categories" rules={ {required: true} } />
                    <ErrorMessage>{ (errors.categories?.type === 'required') && "Chosing a category is required." }</ErrorMessage>
                </Field>
                <ProductList>
                    <ProductListHeading>Add Products</ProductListHeading>
                    <ProductInfoForm register={ register } errors={ errors } />
                    <center>
                        <AddProdButton onClick={ () => console.log("hello") }><FaPlusCircle />Add New Product</AddProdButton>
                    </center>
                </ProductList>
                <SubmitWrapper>
                    <Submit type="submit" value="Add new listing"/>
                </SubmitWrapper>
            </Form>
        </FormWrapper>
    </PageWrapper>
  )
}

export default ListProduct