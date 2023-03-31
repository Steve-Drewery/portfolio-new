import { React, useReducer } from "react";
import NewPost from "./NewPost";
import reducer from "../utils/PostsReducer";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const initialPosts = [
  {
    title: "Mr. Duking",
    description:
      "I highly resepect Fateen. All the town citizens know about her.",
  },
  { title: "Pokemon trainer", description: "10/10 I caught them all!" },
  {
    title: "Town citizen",
    description:
      "I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.",
  },
];

const Blog = () => {
  const initialState = {
    posts: initialPosts,
    isShowEditBox: false,
    editBoxMessage: "",
    selectedPostId: null,
  };
  const [store, dispatch] = useReducer(reducer, initialState);
  const { posts, isShowEditBox, editBoxMessage } = store;

  function setPosts(newPost) {
    dispatch({
      type: "setPosts",
      data: newPost,
    });
  }

  function deletePost(id) {
    dispatch({
      type: "deletePost",
      data: id,
    });
  }

  function initialiseEditBox(id) {
    dispatch({
      type: "initialiseEditBox",
      data: id,
    });
  }

  function updateEditBoxMessage(e) {
    let message = e.target.value;
    dispatch({
      type: "updateEditBoxMessage",
      data: message,
    });
  }

  function saveMessage() {
    dispatch({
      type: "saveMessage",
    });
  }

  const addPosts = (description) => {
    const newPost = {
      title: "Anonymous",
      description: description,
    };

    setPosts(newPost);
  };

  return (
    <Stack alignItems={{ xs: "center", lg: "flex-start" }} mt="37px" p="20px">
      <Box pl="20px" m="5px">
        <Typography className="title" color="#66fcf1">
          My Blog
        </Typography>
      </Box>

      <NewPost addPosts={addPosts} />
      {isShowEditBox && (
        <>
          <Typography color="white">Edit the message below</Typography>
          <Card width="100%">
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
              value={editBoxMessage}
              placeholder="Edit your post"
              onChange={updateEditBoxMessage}
            />
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
              onClick={saveMessage}
            >
              +
            </Button>
          </Card>
        </>
      )}
      <Typography color="white">Posts</Typography>
      <Stack>
        {posts.map(({ title, description }, id) => (
          <Box key={id}>
            <BlogCard
              key={`${id}-item`}
              title={title}
              description={description}
            >
              {title} {description}
            </BlogCard>
            <Stack alignItems="flex-end" flexDirection="row-reverse">
              <Button
                className="btn-blog-2"
                key={`${id}-button`}
                onClick={() => deletePost(id)}
              >
                Delete
              </Button>
              <Button
                className="btn-blog-2"
                key={`${id}-edit-button`}
                onClick={() => initialiseEditBox(id)}
              >
                Edit
              </Button>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Blog;
