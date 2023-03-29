import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Sidemenu = (props) => {
  const { sections } = props;
  return (
    <Box
      disablegutters
      sx={{
        mt: "60px",
        height: "100%",
        position: "fixed",
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Sidebar
        width="200px"
        backgroundColor="linear-gradient(to left, #00d4ff, #ffffff)"
      >
        <Menu>
          {" "}
          {sections.map((section) => (
            <MenuItem key={section.title}>
              <Link
                key={section.title}
                to={section.url}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {section.icon} {section.title}
              </Link>
            </MenuItem>
          ))}{" "}
        </Menu>
      </Sidebar>
      ;
    </Box>
  );
};

export default Sidemenu;
