import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [info, setInfo] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    setInfo(data);
    console.log(info)
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            placeholder="username"
            ref={register({ minLength: 3 })}
          />
          {errors.username && (
            <p className="er">
              Looks like there was an error: {errors.username.type}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            placeholder="Password"
            ref={register({ minLength: 5 })}
          />
          {errors.password && (
            <p className="er">
              Looks like there was an error: {errors.password.type}
            </p>
          )}
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

export default Login;
