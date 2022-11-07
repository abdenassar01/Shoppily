import { CategoryWrapper, CategoriesList, CategoryHeader, Header } from "./SubComponents";
import CategoryItem from "./item/CategoryItem";

import { BiCategory } from "react-icons/bi"
import { useEffect, useState } from "react";
import { extended } from "../../utils/axios/axois";

const Category = () => {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await extended.get("/categories")
      setCategories(response.data)
    }
    getCategories()
  }, [])

  return (
    <CategoryWrapper>
      <CategoryHeader>
        <Header>
         <BiCategory /> Categories
        </Header>
      </CategoryHeader>
      <CategoriesList>
        {
          categories.map(category => 
            <CategoryItem 
              key={ category.id } label={category.label} value={ category.id } 
            /> )
        }     
      </CategoriesList>
    </CategoryWrapper>
  )
}

export default Category