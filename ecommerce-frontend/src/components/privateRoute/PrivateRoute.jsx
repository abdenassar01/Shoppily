import { Navigate } from "react-router-dom";
import { useUserStore } from "../../models/user"

const PrivateRoute = ({ Element }) => {

  const user = useUserStore();

  if( !user.isAuthentificated ) return <Navigate to="/login" replace />

  return Element
}

export default PrivateRoute