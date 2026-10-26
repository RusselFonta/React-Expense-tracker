import { useState } from "react";
import './LoginForm.css'

export default function LoginForm (){
    const [FormInput, SetFormInput] = useState({
        Username: "",
        Email: "",
        Password: "",
        Validation: false,
        Currency: "XAF"
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
    }

return(
    <>
    <form className="login-form" onSubmit={HandleSubmit}>
        
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

         <div>
            <label htmlFor="currency-field">Select your Currency</label>
            <select 
            name="currency" 
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

            <button type="submit"></button>
    </form>
    </>
)
}