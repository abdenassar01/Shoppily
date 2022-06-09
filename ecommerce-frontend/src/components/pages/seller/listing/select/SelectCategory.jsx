import { Controller } from "react-hook-form";
import Select from 'react-select'

//TODO: to be removed and called from web service

import { categories } from "./categories"

const SelectCategory = ({ control, name, rules }) => {

  return (
    <Controller 
        control={control}
        name={ name }
        rules={ rules }
        render={({
          field: { onChange, value,  ref },
          fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Select
              tabSelectsValue
              options={ categories }
              onChange={ onChange } // send value to hook form
              value={ value }
              inputRef={ ref }
            />
          )}
      />
  )
}

export default SelectCategory