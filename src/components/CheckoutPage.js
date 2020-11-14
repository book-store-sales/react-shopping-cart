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

const CheckoutPage = () => {
  const [info, setInfo] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    setInfo(data);
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
    </div>
  );
};

export default CheckoutPage;
