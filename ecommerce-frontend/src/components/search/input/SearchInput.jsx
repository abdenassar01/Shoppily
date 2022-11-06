import { Controller } from "react-hook-form"
import { Input } from "../styles/Styles"


const SearchInput = ({ value, onChange }) => {

  return (
        <Input
            value={ value }
            onChange={ onChange }
            placeholder="search query"
        />
  )
}

export default SearchInput