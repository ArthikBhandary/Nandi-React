import React, { lazy } from "react"
import ReactDOM from "react-dom"
import HomePage from "./components/HomePage";
import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  { PrivateRoute, TraineePrivateRoute } from "./components/PrivateRoute.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./custom.scss"
import './assets/Toyota-Display-Regular.ttf';

// const HomePage = lazy(() => import("./components/HomePage.js"));
// const App = lazy(() => import("./components/App"));

const routes = (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
              path="/trainee/*"
              element={<TraineePrivateRoute component={HomePage} />}
          />
          {/*<TraineePrivateRoute path="/trainee" component={HomePage} />*/}\
            <Route
                path="/admin/*"
                element={<PrivateRoute component={HomePage} />}
            />
          {/*<PrivateRoute path="/admin" component={HomePage} />*/}
          <Route path="/redirect" element={<App />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
);

ReactDOM.render(
    <React.StrictMode>
        { routes }
    </ React.StrictMode>,
  document.getElementById("root")
)
