import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
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

const sections = [
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About",
    url: "/about",
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
        <Box>
          <ResponsiveAppBar
            title="My Portfolio"
            sections={sections}
          ></ResponsiveAppBar>
        </Box>
        <Box
          width="400px"
          // backgroundColor="#7bc6cc"
          sx={{
            width: {
              xl: "1488px",
            },
            background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
          }}
          m="auto"
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<NewUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </StateContext.Provider>
    </Box>
  );
}

export default App;
