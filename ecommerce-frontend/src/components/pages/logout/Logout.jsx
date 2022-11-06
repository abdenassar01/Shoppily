import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '../../../models/user'

const Logout = () => {

   const user = useUserStore();

    useEffect(() => {
        user.logout()
    }, [])

  return (
    <Navigate to="/" replace={ true } />
  )
}

export default Logout