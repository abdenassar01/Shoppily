import { CategoryItemWrapper } from "../SubComponents";


const CategoryItem = ({ label, value }) => {
  return (
    <CategoryItemWrapper value={ value } to="/gsgs">
        { label }
    </CategoryItemWrapper>
  )
}

export default CategoryItem