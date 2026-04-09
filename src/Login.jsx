import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  console.log(loginData);

  return (
    <div className="LoginWrapper">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "30%",
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 0px 3px 3px #f1f1f1",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <h1>Login</h1>

        <TextField
          label="User Name"
          placeholder="User Name"
          name="email"
          onChange={handleChange}
        />

        <TextField
          label="Password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <Button variant="contained" size="medium">
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
