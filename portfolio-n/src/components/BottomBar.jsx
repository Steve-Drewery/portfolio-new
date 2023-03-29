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

export default function BottomBar() {
  return (
    <React.Fragment>
      <CssBaseline />
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
                color: "white",
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
                color: "white",
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
    </React.Fragment>
  );
}
