import React, { useState } from 'react';



export function HandleChange() {

    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email:"",
            comment:"",
            isFriendly: true,
            employment:""
    })
    

    function toggleForm(event) {setFormData(element => ({
        ...element, 
        [event.target.name]: 
            event.target.type === "checkbox" ? 
                event.target.checked :
                event.target.value 
    // const {name, value, type, checked} = event.target
    }))}

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }


return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='First Name'
            onChange={toggleForm}
            name="firstName"
            value={formData.firstName}
        ></input>
        <input
            type="text"
            placeholder='Last Name'
            onChange={toggleForm}
            name="lastName"
            value={formData.lastName}
        ></input>
        <input
            type="email"
            placeholder='Email'
            onChange={toggleForm}
            name="email"
            value={formData.email}
        ></input>
        <textarea 
            placeholder='Your comments'
            onChange={toggleForm}
            name="comment"
            value={formData.comment}
        />

        <input 
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={toggleForm}
            name="isFriendly"
        />
        <label htmlFor="isFriendly">
            Are you friendly?
        </label>
        
        <fieldset>
            <legend>Employment status</legend>
        
            <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                onChange={toggleForm}
                checked={formData.employment === "full-time"}
            />
            <label htmlFor='full-time'>Full time</label>
            <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                onChange={toggleForm}
                checked={formData.employment === "part-time"}
            />
            <label htmlFor='part-time'>Part time</label>
            <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                onChange={toggleForm}
                checked={formData.employment === "unemployed"}
            />
            <label htmlFor='unemployed'>Unemployed</label>

        </fieldset>
        {formData.firstName && formData.lastName && formData.email &&
            <p>
                Hello {formData.firstName} {formData.lastName}. Your 
                email is {formData.email}. Your comment is {formData.comment}
            </p>}
        <button>Submit</button>
    </form>
)
}