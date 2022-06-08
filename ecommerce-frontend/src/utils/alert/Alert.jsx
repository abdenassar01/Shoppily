import {
    PageWrapper, AlertDailog, IconWrapper, AlertMessageWrapper
} from "./Styles";

import { ImCross } from "react-icons/im"

export const Alert = ({ message, setMessage, status }) => {
  return (
    <PageWrapper >
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

