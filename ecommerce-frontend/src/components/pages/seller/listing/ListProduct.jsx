import { PageWrapper, BigHeading, FormWrapper, Form,
    Field, Label, Input, ErrorMessage, EditorBorder, 
    ProductList, ProductListHeading, Submit, 
    SubmitWrapper, AddProdButton
} from "./styles/Styles";

import RichTextEditor from "./editor/RichTextEditor";
import SelectCategory from "./select/SelectCategory";
import ProductInfoForm from "./product/ProductInfoForm";

import { Alert } from "../../../../utils"

import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { extended } from "../../../../utils/axios/axois";

const ListProduct = () => {

    const  [ convertedContent, setConvertedContent ] = useState(null);
    const [ message, setMessage ] = useState("")
    const [ status, setStatus ] = useState("success")
    const [ image, setImage ] = useState("") 

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            description : convertedContent,
            title : data.title,
            rating: 0.0,
            store: {
                id: 76
                },
            category: {
                id: data.categories.value
            },
            products: [
                {
                    label : data.reference,
                    price : data.price,
                    availableQte : data.availableQte,
                    cover : data.image
                }
            ]
        }

        try{
            const result = await extended.post("/listing/new", payload, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            setMessage("Product listed succefully")
            setStatus("success")
        }catch(e){
            setMessage("something went wrong")
            setStatus("error")
        }   
    }

  return (
    <PageWrapper>
        <Alert message={ message } setMessage={ setMessage } status={ status } />
        <BigHeading>Add  a new Listing</BigHeading>
        <FormWrapper>
            <Form onSubmit={ handleSubmit(onSubmit) } >
                <Field>
                    <Label>Title: </Label>
                    <Input type="text" placeholder="Title " 
                        {...register("title", { required: true, minLength: {
                            value: 100,
                            message: "Title should be at least 100 character long"
                        } })}
                    />
                    <ErrorMessage>{ (errors.title?.type === 'required') && "Title is required." || errors.title?.message }</ErrorMessage>
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
                    <Label>Category: </Label>
                    <SelectCategory control={ control } name="categories" rules={ {required: true} } />
                    <ErrorMessage>{ (errors.categories?.type === 'required') && "Chosing a category is required." }</ErrorMessage>
                </Field>
                <ProductList>
                    <ProductListHeading>Add Products</ProductListHeading>
                    <ProductInfoForm 
                        register={ register } errors={ errors } 
                    />
                    <center>
                        <AddProdButton onClick={ (e) => {
                            e.preventDefault()
                            }}><FaPlusCircle />
                            Add New Product
                        </AddProdButton>
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