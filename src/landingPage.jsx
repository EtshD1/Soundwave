import React from "react";
import images from "./images";
import { NavLink } from "react-router-dom";
import Styles from "./Styles/landing.module.css";

export default function LandingPage(props) {
  return (<>
    <main>
      <div className={Styles.main}>
        <div style={{ backgroundImage: `url(.${images.Lady})` }} className={Styles.lady}></div>
        <Content />
        <BackgroundAesthetic />
      </div>
    </main>
  </>);
}

function Content(props) {
  return (<>
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Feel the music</h1>
        <p className={Styles.subtitle}>Stream a million songs in a click of a button</p>
        <div>
          <NavLink to="/signup" className={Styles.joinBtn} href="/signup">Get Started</NavLink>
        </div>
      </div>
    </div>
  </>);
}

function BackgroundAesthetic(props) {
  return (<>
    <div className={Styles.circle1}></div>
    <div className={Styles.circle2}></div>
    <div className={Styles.circle3}></div>
  </>);
}