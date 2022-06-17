import { Wrapper, Icon, Input } from "./styles/Styles"

import { IoMdSearch } from "react-icons/io"

const SearchBar = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon>
        <IoMdSearch size={30} />
      </Icon>
      <Input value={ value } onChange={ onChange } />
    </Wrapper>
  )
}

export default SearchBar