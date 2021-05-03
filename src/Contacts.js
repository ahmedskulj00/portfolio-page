import React from "react";
import "./Contacts.css";
import { useForm, ValidationError } from "@formspree/react";

function Contacts() {
  const [state, handleSubmit] = useForm("xeqvelkg");
  if (state.succeeded) {
    return <p>Thank you!</p>;
  }

  return (
    <div>
      <h1 id="contact-title">Feel free to contact me:</h1>
      <div id="contact-form">
        <form onSubmit={handleSubmit} id="contact">
          <label for="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" required=""></input>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} id="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
