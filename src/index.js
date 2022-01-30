import React, { Suspense } from "react"
import ReactDOM from "react-dom"
// import HomePage from "./components/HomePage";
// import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  { PrivateRoute, TraineePrivateRoute } from "./components/PrivateRoute.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./custom.scss"
import './assets/Toyota-Display-Regular.ttf';
import {LoadingSpinner} from "./components/LoadingComponent";

const LazyHomePage = React.lazy(() => import("./components/HomePage.js"));
const LazyApp = React.lazy(() => import("./components/App"));

const routes = (
    <Router>
      <AuthProvider>
          <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            <Routes>
              <Route
                  path="/trainee/*"
                  element={<TraineePrivateRoute component={LazyHomePage} />}
              />
              {/*<TraineePrivateRoute path="/trainee" component={HomePage} />*/}\
                <Route
                    path="/admin/*"
                    element={<PrivateRoute component={LazyHomePage} />}
                />
              {/*<PrivateRoute path="/admin" component={HomePage} />*/}
              <Route path="/redirect" element={<LazyApp />} />
              <Route path="/*" element={<LazyApp />} />
            </Routes>
          </Suspense>
      </AuthProvider>
    </Router>
);

ReactDOM.render(
    <React.StrictMode>
        { routes }
    </ React.StrictMode>,
  document.getElementById("root")
)
