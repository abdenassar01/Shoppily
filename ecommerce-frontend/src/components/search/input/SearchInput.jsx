import { Controller } from "react-hook-form"
import { Input } from "../styles/Styles"


const SearchInput = ({ control, name, rules }) => {

  return (
    <Controller
        control={ control }
        name={ name }
        rules={ rules }
        render={({
            field: { onChange, onBlur, value,  ref }
        }) => (
        <Input
            onBlur={onBlur} 
            onChange={onChange}
            checked={value}
            inputRef={ref}
            placeholder="search query"
        />
      )}
    />
  )
}

export default SearchInput