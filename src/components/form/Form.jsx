import React from 'react'
import "./form.scss";

export default function Form() {
  return (
    <form action="d-flex flex-row">
        <div>
    <input type="name" placeholder='Full name'/>

        </div>
        <div>

    <input type="email" placeholder='Email address'/>
        </div>
    <div>
    <textarea name="textMe" id="" cols="30" rows="10" placeholder="Text"></textarea>
    </div>
    <button className="btn">Send</button>
</form>
  )
}
