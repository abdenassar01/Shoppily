import { Field, Label, Input, ErrorMessage, 
  ProductWrapper, HorisontalSpacer, InputWrapper,
  Currency, ImageInput
 } from "../styles/Styles";

 import axios from "axios";

const ProductInfoForm = ({ errors, register }) => {

  // const handleSubmit = async (e) => {
  //   const response = await axios.post(
  //     "https://api.imgur.com/3/image/",
  //     e.target.files[0],
  //     {
  //       headers: {
  //         Authorization: "Client-ID 9c1850c15c858e1"
  //       }
  //     }
  //   );
  //   console.log(response.data.data.link);
  // };

  return (
    <ProductWrapper>
        <Field>
          <Label>Reference: </Label>
          <Input type="text" 
            placeholder="Black"
            {...register("reference", {
              required: true
            })}
          />
          <ErrorMessage>{ (errors.reference?.type === 'required') && "Reference is required." }</ErrorMessage>
        </Field>
        <HorisontalSpacer />
        <Field>
          <Label>Price: </Label>
          <InputWrapper>
            <Input 
              type="number" 
              placeholder="20"
              {...register("price", {
                required: true
              })}
            />
            <Currency>$ USD </Currency>
          </InputWrapper>
          <ErrorMessage>{ (errors.price?.type === 'required') && "Price is required." }</ErrorMessage>
        </Field>
        <HorisontalSpacer />
        <Field>
          <Label>Available Quantity: </Label>
          <Input 
            type="number" 
            placeholder={12}
            defaultValue={1}
            {...register("availableQte", {
              required: true
            })}
          />
          <ErrorMessage>{ (errors.availableQte?.type === 'required') && "Quantity on store is required." }</ErrorMessage>
        </Field>
        <HorisontalSpacer />
        <Field>
          <Label>Image: </Label>
          <Input type="text"
            placeholder="product main image url"
            {...register("image")}
          /> 
          {/* <ImageInput type="file"
            accept="image/*"
            onChange={ (e) => handleSubmit(e) }
          /> */}
          <ErrorMessage>{ (errors.image?.type === 'required') && "Image is required." }</ErrorMessage>
        </Field>
    </ProductWrapper>
  )
}

export default ProductInfoForm