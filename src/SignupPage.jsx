import React from "react";
import Styles from "./Styles/signup.module.css";

export default function SignUpPage() {
  return (
    <main>
      <div>
        Join the <span>fun</span>.
      </div>
      <div>
        <Form />
      </div>
    </main>
  );
}

function Form() {
  return (
    <form>
      <label>Name:
            <input type="text" placeholder="Mike Tyson" />
      </label>
      <label>Name:
            <input type="text" placeholder="Mike Tyson" />
      </label>
      <label>Name:
            <input type="text" placeholder="Mike Tyson" />
      </label>
      <input type="submit" value="Join Now" />
    </form>
  );
}