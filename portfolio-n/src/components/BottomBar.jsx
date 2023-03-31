import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgba(0,212,255,1)",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function BottomBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0, display: { xs: "flex", md: "none" } }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <IconButton>
                  <MenuBookIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link
                to="/experience"
                style={{
                  textDecoration: "none",
                }}
              >
                <IconButton>
                  <FitnessCenterIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <IconButton>
                  <WorkIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <IconButton>
                  <ContactsIcon />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
}
