import { CategoryWrapper, CategoriesList, CategoryHeader, Header } from "./SubComponents";
import CategoryItem from "./item/CategoryItem";



import { BiCategory } from "react-icons/bi"

const Category = () => {
  return (
    <CategoryWrapper>
      <CategoryHeader>
        <Header>
         <BiCategory /> Categories
        </Header>
      </CategoryHeader>
      <CategoriesList>
        <CategoryItem label={"Men Fashion"} value={""} />       
        <CategoryItem label={"Women Fashion"} value={""} />       
        <CategoryItem label={"Phone & Accessories"} value={""} />       
        <CategoryItem label={"Computer, Office & Security"} value={""} />       
        <CategoryItem label={"Jewelry & Warches"} value={""} />       
        <CategoryItem label={"Bags & Shoes"} value={""} />       
        <CategoryItem label={"Toys & Kids"} value={""} />       
        <CategoryItem label={"Sporting Goods"} value={""} />       
        <CategoryItem label={"Health"} value={""} />       
        <CategoryItem label={"Software"} value={""} />       
        <CategoryItem label={"Art"} value={""} />       
        <CategoryItem label={"Hand Made"} value={""} />       
        <CategoryItem label={"Books"} value={""} />       
        <CategoryItem label={"School Supplies"} value={""} />       
        <CategoryItem label={"Camera"} value={""} />       
        <CategoryItem label={"Travel"} value={""} />       
        <CategoryItem label={"Home Improvement"} value={""} />       
      </CategoriesList>
    </CategoryWrapper>
  )
}

export default Category