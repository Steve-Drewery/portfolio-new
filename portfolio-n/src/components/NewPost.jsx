import { Box, Button, TextField, Card } from "@mui/material";
import { React, useState } from "react";

function NewPost(props) {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    // console.log("handleOnChange")
    setValue(e.target.value);
  };

  return (
    <Card width="100%">
      <Box>
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { xs: "285px", lg: "670px" },
            backgroundColor: "#fff",
            borderRadius: "6px",
          }}
          multiline
          minRows={4}
          placeholder="Start your post here..."
          onChange={handleOnChange}
        ></TextField>
        <Button
          className="newbtn"
          sx={{
            backgroundColor: "rgba(0, 212, 255, 0.8)",
            color: "#fff",
            textTransform: "none",
            width: "50px",
            fontSize: "40px",
            height: "125px",
          }}
          onClick={() => props.addPosts(value)}
        >
          +
        </Button>
      </Box>
    </Card>
  );
}

export default NewPost;
