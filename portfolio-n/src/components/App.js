import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { StateContext } from "../utils/StateContext";
import Login from "./Login";
import LoginPage from "./Login";
import NewUser from "./NewUser";
import NotFound from "./NotFound";
import reducer from "../utils/StateReducer";
import Sidemenu from "./Sidemenu";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import BottomBar from "./BottomBar";
import Blog from "./Blog";
import "./App.css";
import Experience from "./Experience";

const sections = [
  {
    title: "Home",
    url: "/home",
    icon: <HomeIcon />,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <MenuBookIcon />,
  },
  {
    title: "Experience",
    url: "/experience",
    icon: <FitnessCenterIcon />,
  },
  {
    title: "Services",
    url: "/services",
    icon: <WorkIcon />,
  },
  {
    title: "About",
    url: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <ContactsIcon />,
  },
];

function App() {
  const initialState = {
    loggedInUser: null,
    auth: null,
  };
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Box>
      <StateContext.Provider value={{ store, dispatch }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              // background: "linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)",
              background: `url(${require("../images/bg-2.jpg")})`,
            },
          }}
        />
        <Sidemenu sections={sections} />
        <ResponsiveAppBar
          title="My Portfolio"
          sections={sections}
        ></ResponsiveAppBar>

        <Box
          sx={{
            mt: "80px",
            ml: { xs: "none", md: "300px" },
            mb: { xs: "100px" },
          }}
          position="relative"
          p="20px"
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="experience" element={<Experience />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<NewUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <BottomBar />
      </StateContext.Provider>
    </Box>
  );
}

export default App;
