import { useState } from "react";
import './LoginForm.css'

export default function LoginForm (){
    // handle multiple input tag using a single hooks
    const [FormInput, SetFormInput] = useState({
        Username: "",
        Email: "",
        Password: "",
        Validation: false,
        Currency: "XAF"
    })

    // handle message error storing for each form section
    const [Error, SetError] = useState({
        Username: "",
        Email: "",
        Password: "",
        Validation: ""
    })

    // handle input for all input type
    const HandleChanges = (event) => {
        const {name, value, type, checked} = event.target;

        SetFormInput((prev) => ({
            ...prev,
            [name]: type === "checkbox"? checked: value
        }))
    }

    // Handle form submittion
    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log(FormInput)

        let Display_Error = {}
        let isValide = false
        // verifying user input and display and error if not input was entered

        // username entering field
        if(!FormInput.Username.trim()){
            Display_Error.Username = "Username is Required"
            isValide = false
        }

        // Email address entering field
        if(!FormInput.Email.trim()){
            Display_Error.Email = "Email Address is Required"
            isValide = false
        } 

        // Password Entering Field
        if(!FormInput.Password.trim()){
            Display_Error.Password = "A Password is Required"
            isValide = false
        }

        // Validation checkebox field
        if(!FormInput.Validation){
            Display_Error.Validation = "You must agree to the terms of services"
            isValide = false
        }

        if(!isValide){
            SetError(Display_Error)
                return
        }

    }

return(
    <div className="container">
        
    <form className="login-form" onSubmit={HandleSubmit}>
        <h1>LOGIN</h1>
        <div>
        <label htmlFor="Username-field">Username</label>
        <input 
        id="Username-field"
        type="text"
        placeholder="Enter your name"
        value={FormInput.Username}
        name="Username"
        onChange={HandleChanges}
         />   
        </div>
        <div>{Error.Username && <span className="error-message">{Error.Username}</span> }</div>
        
          <div>
            <label htmlFor="Email-field">Email Address</label>
         <input
         id="Email-field"
         type="email"
         placeholder="Enter your email Address"
         value={FormInput.Email}
         name="Email"
         onChange={HandleChanges}
          />
          </div>
          <div>{Error.Email && <span className="error-message">{Error.Email}</span> }</div>
         
         <div>
          <label htmlFor="Password-field">Password</label>
          <input 
          id="Password-field"
          type="password"
          value={FormInput.Password}
          name="Password"
          placeholder="Enter your Password"
          onChange={HandleChanges}
           /> 
         </div>
         <div>{Error.Password && <span className="error-message">{Error.Password}</span> }</div>

         <div>
            <label htmlFor="currency-field">Select your Currency</label>
            <select 
            name="Currency" 
            id="currency-field"
            value={FormInput.Currency}
            onChange={HandleChanges}
            >
                <option value="XAF">XAF (FCFA)</option>
                <option value="EUR"> EUR (€)</option>
                <option value="USD"> USD ($)</option>
            </select>
         </div>
          
          <div>
            <input 
            id="validation-field"
            type="checkbox"
            checked={FormInput.Validation}
            name="Validation"
            onChange={HandleChanges}
             />
            <label htmlFor="validation-field">I agree to the terms of service and the financial data privacy policy of ADN Expense Tracker.</label>
            </div>
            <div>{Error.Validation && <span className="error-message">{Error.Validation}</span> }</div> 

            <button type="submit">Submit</button>
    </form>
    </div>
)
}