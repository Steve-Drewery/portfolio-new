import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Box
      mt="20%"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Stack>
        <Typography className="title">
          Steve Drewery - Web Development
        </Typography>
      </Stack>

      <Typography
        className="title2"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="10%"
      >
        Design, Code, Test <br />
        And Repeat
      </Typography>
      <br></br>
      <br></br>
      <Stack>
        <Button
          className="btn"
          sx={{
            mt: "20%",
          }}
          onClick={() => navigate("/projects")}
        >
          Explore projects
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
