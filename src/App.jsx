import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./Styles/main.css";
import { Navbar, LandingPage, DiscoverPage, Footer, Features, SignUpPage } from "./Components"

export default function App(props) {
  return (<>
    <BrowserRouter basename="/Soundwave">
      <Navbar />
      <Switch>
        <Route path="/signup">
          <SignUpPage />
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