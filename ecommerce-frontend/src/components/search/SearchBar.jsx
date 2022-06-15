import SearchInput from "./input/SearchInput"
import { Wrapper, Icon } from "./styles/Styles"

import { IoMdSearch } from "react-icons/io"

const SearchBar = ({ control, name, rules }) => {
  return (
    <Wrapper>
      <Icon>
        <IoMdSearch size={30} />
      </Icon>
      <SearchInput name={ name } rules={ rules } control={ control }  />
    </Wrapper>
  )
}

export default SearchBar