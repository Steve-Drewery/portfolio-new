import React from "react";
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
    // // <nav className="fixed bottom-2 lg:bottom-8">
    // //   <div className="container mx-auto">
    //     {/* <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify between text 2x1 text-white/50"> */}
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "rgba(0,0,0,0)",
          top: "auto",
          bottom: 20,
          opacity: "0.8",
          width: "100%",
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "#171515",
            justifyContent: "space-around",
            left: "50%",
            marginLeft: "-180px",
            textTransform: "none",
            width: "350px",
            textAlign: "center",
            lineHeight: "30px",
            color: "#666",
            transition: ".5s",
            borderRadius: "50px",
          }}
        >
          <div>
            <Link to="/blog">
              <IconButton>
                <MenuBookIcon className="btn" />
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
                <FitnessCenterIcon className="btn" />
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
                <WorkIcon className="btn" />
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
                <InfoIcon className="btn" />
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
                <ContactsIcon className="btn" />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
