import React from 'react'
import "./form.scss";

export default function Form() {
  return (
    <form action="form d-flex flex-row form col-12">
        <div className="d-flex">
        <input type="name" placeholder='Full name'/>
        </div>
        <div>

    <input type="email" placeholder='Email address'/>
        </div>
    <div>
    <textarea name="textMe" id="" cols="30" rows="10" placeholder="Text"></textarea>
    </div>
    <button className="btn bigger-text" type="submit">Send</button>
</form>
  )
}
