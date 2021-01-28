import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./Styles/main.css";
import { Navbar, LandingPage, DiscoverPage, Footer, Features } from "./Components"

export default function App(props) {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/signup">
          <h1>Signup Page</h1>
          <Footer />
        </Route>
        <Route path="/features">
          <Features />
          <Footer />
        </Route>
        <Route path="/discover">
          <DiscoverPage />
          <Footer />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </>);
}