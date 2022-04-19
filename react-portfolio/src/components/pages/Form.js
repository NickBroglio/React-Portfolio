import React, { useState } from 'react';
import '../form.css';


function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Name is required!');
            return;
        }
        if (!email) {
            setErrorMessage('Email is required!');
            return;
        }
        if (!message) {
            setErrorMessage('Message is required!');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div>
            <form className='entire-form'>
                <div class="form-group">
                    <label for="exampleFormControlInput1" className='input-title'>Name</label>
                    <input
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        type='name'
                        className="form-control input-box"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1" className='input-title'>Email</label>
                    <input
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        className="form-control input-box"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" className='input-title'>Message</label>
                    <input
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        type='message'
                        className="form-control input-box"
                        id="exampleFormControlTextarea1"
                        rows="10"
                    />
                </div>
                <button type="button" class="btn btn-primary m-5 fs-1" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
