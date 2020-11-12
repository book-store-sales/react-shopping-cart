import React, {useState} from 'react'



const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const CheckoutPage =({cart}) => {
    
    const [values, setValues] = useState(initialValue)

  

    return(
         <div className="container">
          <div className="checkout-section">
            <h1><b>CHECKOUT!</b></h1>
            <form >
        <h2>Checkout Form</h2>
    
          
          <input
            name="firstName"
            value={values.firstName}            
            placeholder="First Name"
          />
        
        <div className="baseline" />
    
         
          <input
            name="lastName"
            value={values.lastName}            
            placeholder="Last Name"
          />
        
        <div className="baseline" />
    
          
          <input
            name="address"
            value={values.address}
            placeholder="Address"
          />
        
        <div className="baseline" />
    
         
          <input name="city" value={values.city}  placeholder="City" />
        
        <div className="baseline" />
    
          
          <input name="state" value={values.state}  placeholder="State" />
        
        <div className="baseline" />
    
          
          <input name="zip" value={values.zip}  placeholder="Zip" />
        
        <div className="baseline" />
        <button className="md-button form-button">Update</button>
      </form>
        </div>
         </div>
    )
}

export default CheckoutPage