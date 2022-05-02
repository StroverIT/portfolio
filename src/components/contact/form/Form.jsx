import React, { useEffect, useState } from "react";
import "./form.scss";

import axios from 'axios';
const url = "http://localhost:8022/contactUs"
export default function Form() {
  const [message, setMessage] = useState(null)

  function handleForm(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
      axios.request({
        method: "POST",
        url,
        headers: {
          "Content-Type": "application/json"
        },
        data: formData
      }).then(res=>{
        console.log(res);
      })


   
  }
  useEffect(()=>{
    console.log(message);
},[message])
  return (
    <form
      action="form d-flex flex-row form col-12"
      method="POST"
      onSubmit={handleForm}
    >
      <div className="d-flex">
        <input type="name" placeholder="Full name" name="user" required/>
      </div>
      <div>
        <input type="email" placeholder="Email address" name="email" required/>
      </div>
      <div>
        <input type="name" placeholder="Subject" name="subject"  required/>
      </div>
      <div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <button className="btn bigger-text" type="submit">
        Send
      </button>
    </form>
  );
}
