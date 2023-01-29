import React from "react";
import '../styles/Contact.css';

const Contact = () => {
    return (

        <form method="POST" target="_blank" className='form'>
            <h2 className="ContactMe">Contact Me</h2>
            <div>
                <input type="text" placeholder="Your name" name="name" className="name" required />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" className="email" required />
            </div>
            <div>
                <textarea placeholder="Your message" name="message" className="message" required />
            </div>
            <div>
                <button type="submit" className="button"> Send a message </button>
            </div>
        </form>
    );
};



export default Contact;
