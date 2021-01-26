import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./Styles/main.css";
import Navbar from "./Navbar";
import LandingPage from "./landingPage";

export default function App(props) {
  return (<>
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path="/signup">
            <h1>Signup Page</h1>
          </Route>
          <Route path="/discover">
            <h1>Discover Page</h1>
          </Route>
          <Route path="/features">
            <h1>Features Page</h1>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </>);
}