import React from "react"
import Signup from "./Signup"
import Logo from "./Logo"
import Dashboard from "./Dashboard"
import Login from "./Login"
import TraineeLogin from "./TraineeLogin"
import AdminLogin from "./AdminLogin"
import RedirectLogin from "./UserRedirect"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
// import HomePage from "./HomePage"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom"

function App() {
  const { path } = useRouteMatch();
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
    <h1 className="text-center">NANDI TOYOTA</h1>
    <Container
      className="d-flex align-items-center justify-content-center"
    >
      <div className="d-none d-md-block w-100" style={{ maxWidth: "600px", }}><Logo/></div>
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <AuthProvider>
              <Switch>
                <Route path= "/signup" component={Signup} />
                <Route path= "/trainee/login" component={TraineeLogin} />
                <Route path= "/trainee" component={TraineeLogin} />
                <Route path= "/admin" component={ AdminLogin } />
                <Route path= "/forgot-password" component={ForgotPassword} />
                <Route path= "/" component={RedirectLogin} />
              </Switch>
            </AuthProvider>
      </div>
    </Container>
    </Container>
  );
}

export default App
