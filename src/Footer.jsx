import React from "react";
import Styles from "./Styles/footer.module.css";

export default function Footer(props) {
  return (
    <footer>
      <div>
        <div className={Styles.Links}>
          <span href="#">
            About Us
          </span>
          <span href="#">
            Contact
          </span>
        </div>
        <div>
          <span href="#">
            Twitter
          </span>
          <span href="#">
            Facebook
          </span>
        </div>
      </div>
    </footer>
  );
}