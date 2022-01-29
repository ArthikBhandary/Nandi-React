import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.js"

const PrivateRoute: React.FC  = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  return (
      currentUser ? <Component {...rest} /> : <Navigate to="/" />
  )
}

const TraineePrivateRoute: React.FC = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  return (
      currentUser ? <Component {...rest} /> : <Navigate to="/" />
  )
}

export {PrivateRoute, TraineePrivateRoute};
