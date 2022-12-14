import React from "react";
import { RegisterContainer, Form } from "./RegisterStyles";

const Register = () => {
  return (
    <RegisterContainer>
      <Form>
        <img className="mb-4" src="./logo.png" alt="" />
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPasswordConfirm"
            placeholder="Confirm Password"
          />
          <label for="floatingPasswordConfirm">Confirm Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
