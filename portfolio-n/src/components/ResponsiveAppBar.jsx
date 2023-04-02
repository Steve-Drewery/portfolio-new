import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginBar from "./LoginBar";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { MenuItem } from "@mui/material";

function ResponsiveAppBar(props) {
  const { title, sections } = props;
  let navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      style={{
        background: "#080808",
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
              <HomeIcon className="btn" />
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((section) => (
              <MenuItem
                key={section.title}
                // style={{ color: "white", backgroundColor: "rgba(102, 252, 241)" }}
                className="sidemenu"
              >
                <Link
                  className="btn-blog-2"
                  to={section.url}
                  style={{
                    textDecoration: "none",
                    width: "150px",
                    margin: "-10px",
                  }}
                >
                  {section.icon} {section.title}
                </Link>
              </MenuItem>
            ))}
          </Box>
          <LoginBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
