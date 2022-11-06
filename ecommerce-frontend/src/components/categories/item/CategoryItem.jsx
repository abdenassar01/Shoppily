import { CategoryItemWrapper } from "../SubComponents";


const CategoryItem = ({ label, value }) => {
  return (
    <CategoryItemWrapper value={ value } to={`/category/${ value }`}>
        { label }
    </CategoryItemWrapper>
  )
}

export default CategoryItem