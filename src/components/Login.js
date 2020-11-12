import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = (data) => {
    // const user = {
    //     username: data.username,
    //     password: data.password
    // }
    console.log(data);

    setValue("username", "");
    setValue("password", "");
  };
  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <input type="text" name="username" ref={register} />
          &nbsp; &nbsp;
          <label>Password:</label>
          <input type="text" name="password" ref={register} />
          &nbsp; &nbsp;
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
