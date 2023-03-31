import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Box color="white">
      <Stack alignItems="center" justifyContent="flex-end">
        <Typography className="title">
          Steve Drewery - Web Development
        </Typography>
      </Stack>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Design, Code, Test <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out my most recent projects
      </Typography>
      <br></br>
      <br></br>
      <Stack>
        <Button
          className="btn"
          // sx={{
          //   backgroundColor: "rgba(0,212,255,0.8)",
          //   color: "#fff",
          //   textTransform: "none",
          //   width: "200px",
          //   fontSize: { lg: "20px", xs: "14px" },
          //   height: "56px",
          // }}
          onClick={() => navigate("/projects")}
        >
          Explore projects
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
