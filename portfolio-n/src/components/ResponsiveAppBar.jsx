import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import LoginBar from "./LoginBar";

function ResponsiveAppBar(props) {
  const { title, sections } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background:
          "linear-gradient(135deg, rgba(132,206,235,1) 0%, rgba(0,212,255,1) 43%, rgba(9,9,121,1) 87%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section.title}
                  onClick={handleCloseNavMenu}
                  style={{ background: "rgba(0,212,255,1) 43%" }}
                >
                  <Typography textAlign="center">
                    <Link
                      key={section.title}
                      to={section.url}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      {section.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
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
              <Button
                key={section.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  key={section.title}
                  to={section.url}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {section.title}
                </Link>
              </Button>
            ))}
          </Box>
          <LoginBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
