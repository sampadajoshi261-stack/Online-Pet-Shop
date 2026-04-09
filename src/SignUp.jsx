import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  }
  console.log(signUpData);
  return (
    <div className="signupContainer">
      <div className="signupSection">
        <div className="signupImg"></div>
        <div className="signupForm">
          <h2>Sign Up</h2>
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="User Name"
            placeholder="User Name"
            name="name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="User Email"
            placeholder="User Email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            size="small"
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
