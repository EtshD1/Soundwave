import React from "react";
import Styles from "./Styles/footer.module.css";

export default function Footer(props) {
  return (
    <footer>
      <div className={Styles.Container}>
        <div className={Styles.Links}>
          <div>
            <span>
              About Us
            </span>
          </div>
          <div>
            <span>
              Contact
            </span>
          </div>
        </div>
        <div className={Styles.SocialLink}>
          <div>
            <span>
              Twitter
            </span>
          </div>
          <div>
            <span>
              Facebook
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}