import React from 'react';
import "./contact.scss";
import  Form from "../form/Form";

const Contact = () => {
    return (
        <section className="contact d-flex justify-content-center align-items-center flex-column">
           <div className="pb-1">
       <p className="title primary-color titleNext">What's next?</p>
     </div>
            <h4 className="title-color bigger-title getInTouch">Get In Touch</h4>
            <p className="text col-12 col-sm-8">
                Althrough I'm now currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <section className="col-12 col-sm-7">
                <Form />
            </section>
        </section>
    );
}

export default Contact;
