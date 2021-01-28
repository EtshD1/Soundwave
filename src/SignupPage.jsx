import React from "react";
import Styles from "./Styles/signup.module.css";

export default function SignUpPage() {
  return (
    <main className={Styles.main}>
      <div className={Styles.callToAction}>
        <h1>
          Join the <span>fun</span>.
        </h1>
      </div>
      <div className={Styles.form}>
        <Form />
      </div>
    </main>
  );
}

function Form() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Name:
            <input type="text" placeholder="Mike Tyson" required />
      </label>
      <label>Password:
            <input type="password" placeholder="Not_Mike_Tyson2" required />
      </label>
      <label>Email:
            <input type="email" placeholder="TheRealMikeTyson@yahoo.com" required />
      </label>
      <input className={Styles.submitBtn} type="submit" value="Join Now" />
    </form>
  );
}