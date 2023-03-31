import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginBar from "./LoginBar";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function ResponsiveAppBar(props) {
  const { title } = props;
  let navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      style={{
        background:
          "linear-gradient(135deg, rgba(132,206,235,1) 0%, rgba(0,212,255,1) 43%, rgba(9,9,121,1) 87%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate("/home")}
              color="white"
            >
              <HomeIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <LoginBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
