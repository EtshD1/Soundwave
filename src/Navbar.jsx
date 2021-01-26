import images from "./images";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Styles from "./Styles/Navbar.module.css";

export default function Navbar(props) {
  const [active, setActive] = useState(false);

  function toggleNavBar() {
    if (window.innerWidth <= 675) {
      setActive(prevState => {
        return !prevState;
      });
    }
  }

  return (<>
    <header className={Styles.header}>
      <Logo />
      <nav className={Styles.navbar}>
        <NavElements isActive={active} toggle={toggleNavBar} />
        <BurgerButton toggle={toggleNavBar} />
      </nav>
    </header>
    <div className={[Styles.modal, active ? Styles.active : ""].join(" ")} onClick={toggleNavBar}></div>
  </>);
}

function Logo() {
  return (<>
    <NavLink className={Styles.headerLogo} to="/" >
      <img src={images.Logo} alt=" " />
      <div>Soundwave</div>
    </NavLink>
  </>);
}

function NavElements({ isActive, toggle }) {
  return (<>
    <ul className={isActive ? Styles.active : ""}>
      <li>
        <NavLink onClick={toggle} to="/discover">
          Discover
          </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} to="/Features">
          Features
          </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} to="/signup" className={Styles.join}>
          Join
          </NavLink>
      </li>
      <li onClick={toggle} className={Styles["nav-close"]}>
        <div></div>
      </li>
    </ul>
  </>);
}

function BurgerButton({ toggle }) {
  return (<>
    <div onClick={toggle} className={Styles.burger}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>);
}