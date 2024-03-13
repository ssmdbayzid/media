import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    const accessable = user ? children : <Navigate to="/login" state={{from: location}} replace />

  return accessable;
}

export default PrivateRoute