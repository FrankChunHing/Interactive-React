import React, { useState } from 'react';

export function Login(){

    const[cred, setCred] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        newsletter: false
    })

    function handleChange(event){
        const {name, value, checked, type} = event.target
        setCred(element => {
            return {
                ...element,
                [name]: type === "checkbox" ?
                    checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        return cred.password === cred.confirmPassword ?
            alert("You have signed up") :
            alert("Passwords not the same")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name="email"
                    value={cred.email}
                    onChange={handleChange}
                    placeholder='Email input'
                />
                <input
                    type='password'
                    name="password"
                    value={cred.password}
                    onChange={handleChange}
                    placeholder='password input'
                />
                <input
                    type='password'
                    name="confirmPassword"
                    value={cred.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm password'
                />
                <input 
                    type="checkbox"
                    id="newsletter"
                    checked={cred.newsletter}
                    onChange={handleChange}
                    name="newsletter"
                />
                <label htmlFor="newsletter">
                    I want to join the newsletter
                </label>
            <button>Sign up</button>

            </form>
        </div>
    )
}

