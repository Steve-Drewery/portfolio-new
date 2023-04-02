import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
function Contact() {
  const [state, handleSubmit] = useForm("xqkoyyde");
  if (state.succeeded) {
    return (
      <Stack alignItems="center" mt="37px" p="20px">
        <Box pl="20px" m="5px">
          <Typography className="title2">
            Thank you, I will be in contact.
          </Typography>
        </Box>
      </Stack>
    );
  }
  return (
    <Stack mt="37px" p="20px" display="flex">
      <Box>
        <Box pl="20px" m="5px">
          <Typography className="title3">Contact</Typography>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                sx={{
                  input: {
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "4px",
                  },
                  width: "350px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  margin: "10px",
                }}
                height="76px"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </Box>
            <Box>
              <TextField
                sx={{
                  input: {
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "4px",
                  },
                  width: "350px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  margin: "10px",
                }}
                multiline
                minRows="10"
                placeholder="Message"
                name="message"
                id="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Box>

            <Button
              className="btn"
              type="submit"
              disabled={state.submitting}
              sx={{ margin: "10px" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Stack>
  );
}

export default Contact;
