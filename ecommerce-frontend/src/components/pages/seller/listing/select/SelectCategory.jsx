import Select from 'react-select'
import Loading from "../../../../../utils/loading/Loading";

import { Navigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useQuery } from "react-query";

import { extended } from "../../../../../utils/axios/axois";

const SelectCategory = ({ control, name, rules }) => {

  const { isLoading, error, data } = useQuery("fetch_categories", async () => {
    const categories = await extended.get("/categories");
    return categories?.data
  })

  console.log()

  if(isLoading) return <Loading size={ 70 } />
  if(error) return <Navigate to="/error" />


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
              options={ data?.map(ele => ({ value: ele.id,  label: ele.label })) }
              onChange={ onChange } // send value to hook form
              value={ value }
              inputRef={ ref }
            />
          )}
      />
  )
}

export default SelectCategory