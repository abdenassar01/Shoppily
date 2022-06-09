import { PageWrapper, BigHeading, FormWrapper, Form,
    Field, Label, Input, ErrorMessage, EditorBorder, 
    ProductList, ProductListHeading
} from "./styles/Styles";

import RichTextEditor from "./editor/RichTextEditor";
import SelectCategory from "./select/SelectCategory";
import ProductInfoForm from "./product/ProductInfoForm";

import { useState } from "react";
import { useForm } from "react-hook-form";

const ListProduct = () => {

    const  [convertedContent, setConvertedContent] = useState(null);
    const { register, handleSubmit, control, formState: { errors } } = useForm();

  return (
    <PageWrapper>
        <BigHeading>Add  a new Product</BigHeading>
        <FormWrapper>
            <Form>
                <Field>
                    <Label>Title: </Label>
                    <Input />
                    <ErrorMessage>Title is required</ErrorMessage>
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
                    <ErrorMessage>chosing a category is required</ErrorMessage>
                </Field>
                <ProductList>
                    <ProductListHeading>Add Products</ProductListHeading>
                    <ProductInfoForm />
                </ProductList>
            </Form>
        </FormWrapper>
    </PageWrapper>
  )
}

export default ListProduct