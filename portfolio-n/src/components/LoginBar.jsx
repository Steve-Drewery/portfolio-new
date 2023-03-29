import { Avatar, Box, Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";

export default function LoginBar() {
  let navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  function handleLogout(event) {
    event.preventDefault();
    logout().then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({ type: "setToken", data: null });
      navigate("/");
    });
  }
  if (loggedInUser) {
    return (
      <Box sx={{ flexGrow: 0, display: "flex" }}>
        <Box display="flex" justifyContent="flex-end" sx={{ pt: 1, pb: 1 }}>
          <Button
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Tooltip title="Account">
          <IconButton onClick={() => navigate("/account")}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 0, display: "flex" }}>
        <Box display="flex" justifyContent="flex-end" sx={{ pt: 1, pb: 1 }}>
          <Button
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={handleLogout}
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }
}
