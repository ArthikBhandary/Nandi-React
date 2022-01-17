import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import { AuthProvider } from "./contexts/AuthContext.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage.js"
import  { PrivateRoute, TraineePrivateRoute } from "./components/PrivateRoute.js"


import "bootstrap/dist/css/bootstrap.min.css"
// import "./custom.scss"
import './assets/Toyota-Display-Regular.ttf';

const routes = (
    <Router>
      <AuthProvider>
        <Switch>
          <TraineePrivateRoute path="/trainee" component={HomePage} />
          <PrivateRoute path="/admin" component={HomePage} />
          <Route path="/redirect" component={App} />
          <Route path="/" component={App} />
        </Switch>
      </AuthProvider>
    </Router>
);

ReactDOM.render(
  routes,
  document.getElementById("root")
)
