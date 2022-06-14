import {
    PageWrapper, AlertDailog, IconWrapper, AlertMessageWrapper
} from "./Styles";

import { ImCross } from "react-icons/im"

export const Alert = ({ message, setMessage, status }) => {

  if(!message) return null

  return (
    <PageWrapper onClick={ () => setMessage("") }>
        <AlertDailog status={status}>
          <IconWrapper>
            <ImCross onClick={ () => setMessage("") }/>
          </IconWrapper>
          <AlertMessageWrapper>
            { message }
          </AlertMessageWrapper>
        </AlertDailog>
    </PageWrapper>
  )
}

