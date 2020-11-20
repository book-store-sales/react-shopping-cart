import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: ""
// };

const CheckoutPage = ({cart}) => {
  const [info, setInfo] = useState();
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
  const onSubmit = (data) => {
    setInfo(data);
    setshowSuccessMessage(!showSuccessMessage)
    console.log(info)
  };
  
  return (
    <div className="checkout-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            id="firstName"
            placeholder="Alex"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p className="er">
              Looks like there was an error: {errors.firstName.type}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            id="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p className="er">
              Looks like there was an error: {errors.lastName.type}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>

          <input
            name="address"
            id="address"
            ref={register({ required: false })}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>

          <input name="city" id="city" ref={register({ required: false })} />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>

          <input
            name="zipcode"
            id="zipcode"
            ref={register({ required: false })}
          />
        </div>

        {/* {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )} */}

        <input type="submit" id="submit" />
      </form>
      {showSuccessMessage && (
        
        <div className="success-message" data-testid="successMessage">
          
          <p>
            
            Thank you for placing your order! Woo-hoo! 
          </p>
          
          
          <p>Your new items will be shipped to:</p>
          <br />
          
          <p>
            {info.firstName} {info.lastName}
          </p>
          <p>{info.address}</p>
          <p>
            {info.city}, {info.state} {info.zipcode}
          </p>
          <br/>
          <br/>
          <p>Order Details</p>
          <div>
            {cart.map(item => (

                      <div className="cartcheckout-items-list-wrapper" style={{display:"flex"}}>
                      <div className="cartcheckout-item-card" key={item.id}>
                          <img
                          className="cartcheckout-item-list-image"
                          src={item.image}
                          alt={item.title}
                          />
                      </div>
                      <div className="cartcheckout-item-info">
                          <p>{item.title}</p>
                          <p>${item.price}</p>
                      </div>
                     
                    </div> 
            ))}
            <h4>Total: ${getCartTotal()}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
