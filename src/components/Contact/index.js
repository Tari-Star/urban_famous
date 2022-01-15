import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

return (
    <section className="container">
        <h2 className="top-title">Contact Me</h2>
        <hr></hr>
        <div class = "my-contacts">
        <a href="mailto:tari.star.g@gmail.com"><span>&#9993;</span> tari.star.g@gmail.com</a>
        <a href="tel:7273189794"><span>&#9742;</span> 727.318.9794</a>
        </div>
        <hr></hr>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="mt-5" >
                <label htmlFor="name">Name: </label>
                <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div><br/>
            <div class="mt-5" >
                <label htmlFor="email">Email: </label>
                <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div><br/>
            <div class="mt-5" >
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div class="mt-5 mb-5" >
            <button class="btn btn-outline-dark " type="submit">Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;

