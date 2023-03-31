import { useNavigate } from "react-router-dom";
import { register } from "../services/authServices";
import { useState } from "react";
import { useGlobalState } from "../utils/StateContext";
import { Box, Button, Stack, TextField } from "@mui/material";

export default function NewUser() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const { dispatch } = useGlobalState();

  let navigate = useNavigate();

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleRegister(event) {
    event.preventDefault();
    register(formState).then((data) => {
      let username = data.username;
      let token = data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", username);
      dispatch({ type: "setLoggedInUser", data: username });
      dispatch({ type: "setToken", data: token });
      navigate("/home");
    });
  }

  return (
    <>
      <Stack
        alignItems={{ xs: "center", lg: "flex-start" }}
        mt="37px"
        justifyContent="center"
        p="20px"
      >
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: "350px",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
            height="76px"
            value={formState.name}
            placeholder="Name"
            type="name"
            name="name"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: "350px",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
            height="76px"
            value={formState.username}
            placeholder="Username"
            type="username"
            name="username"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: "350px",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
            height="76px"
            value={formState.email}
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: "350px",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
            height="76px"
            value={formState.password}
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: "350px",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
            height="76px"
            value={formState.password_confirmation}
            placeholder="Password Confirmation"
            type="password"
            name="password_confirmation"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <Button className="btn" onClick={handleRegister}>
            Register
          </Button>
        </Box>
      </Stack>
    </>
  );
}
