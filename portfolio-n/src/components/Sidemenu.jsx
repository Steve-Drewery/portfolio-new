import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Sidemenu = (props) => {
  const { sections } = props;
  return (
    <Box
      sx={{
        height: "100%",
        position: "fixed",
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        mt: "-20px",
      }}
    >
      <Sidebar
        className="sidebar"
        width="200px"
        backgroundColor="rgba(102, 252, 241, 0.3)"
      >
        <Menu>
          {" "}
          {sections.map((section) => (
            <MenuItem
              component={<Link to={section.url} />}
              key={section.title}
              // style={{ color: "white", backgroundColor: "rgba(102, 252, 241)" }}
              className="sidemenu"
            >
              {section.icon} {section.title}
            </MenuItem>
          ))}{" "}
        </Menu>
      </Sidebar>
      ;
    </Box>
  );
};

export default Sidemenu;
