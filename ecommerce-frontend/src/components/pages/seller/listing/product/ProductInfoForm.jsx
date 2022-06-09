import { Field, Label, Input, ErrorMessage, 
  ProductWrapper, HorisontalSpacer } from "../styles/Styles"

const ProductInfoForm = () => {

  return (
    <ProductWrapper>
        <Field>
          <Label>Reference: </Label>
          <Input />
          <ErrorMessage>reference is required</ErrorMessage>
        </Field>
        <HorisontalSpacer />
        <Field>
          <Label>Price: </Label>
          <Input />
          <ErrorMessage>Price is required</ErrorMessage>
        </Field>
    </ProductWrapper>
  )
}

export default ProductInfoForm