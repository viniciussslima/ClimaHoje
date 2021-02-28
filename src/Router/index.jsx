import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/weather";
import Home from "../pages/Home";

function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route
          render={(props) => <Redirect {...props} to="/"></Redirect>}
        ></Route>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
