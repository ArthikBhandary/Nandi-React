import React from "react"
import Signup from "./Signup.js"
import Logo from "./Logo.js"
import TraineeLogin from "./TraineeLogin.js"
import AdminLogin from "./AdminLogin.js"
import RedirectLogin from "./UserRedirect.js"
import ForgotPassword from "./ForgotPassword.js"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext.js"
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
                <Route path= "/login_trainee" component={TraineeLogin} />
                <Route path= "/trainee" component={TraineeLogin} />
                <Route path= "/login_admin" component={ AdminLogin } />
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
