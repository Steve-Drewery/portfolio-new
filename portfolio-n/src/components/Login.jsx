import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";
import { Box, Button, Stack, TextField } from "@mui/material";

export default function Login() {
  const initialFormState = {
    email: "",
    password: "",
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

  function handleSubmit(event) {
    event.preventDefault();

    login(formState)
      .then((data) => {
        let username = data.username;
        let token = data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", username);

        dispatch({ type: "setLoggedInUser", data: username });
        dispatch({ type: "setToken", data: token });
        navigate("/home");
      })
      .catch((error) => console.log(error));
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "200px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={formState.username}
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
            width: { lg: "200px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
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
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "200px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <br />
        <br />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "200px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Stack>
  );
}
