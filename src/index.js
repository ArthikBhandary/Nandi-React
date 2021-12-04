import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import PrivateRoute from "./components/PrivateRoute"


import "bootstrap/dist/css/bootstrap.min.css"
import "./custom.scss"
import './assets/Toyota-Display-Regular.ttf';

const routes = (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/trainee" component={HomePage} />
          <Route path="/" component={App} />
        </Switch>
      </AuthProvider>
    </Router>
);

ReactDOM.render(
  routes,
  document.getElementById("root")
)
