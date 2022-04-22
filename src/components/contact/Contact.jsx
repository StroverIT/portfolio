import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div>
            <h4>Get In Touch</h4>
            <p>
                Althrough I'm now currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <form action="">
                <input type="name" placeholder='Full name'/>
                <input type="email" placeholder='Email address'/>
                <textarea name="textMe" id="" cols="30" rows="10" placeholder="Text"></textarea>
            </form>
        </div>
    );
}

export default Contact;
