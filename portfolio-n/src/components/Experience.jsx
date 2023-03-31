import { React } from "react";
import { Box, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const posts = [
  {
    title: "HTML Portfolio",
    description: "https://gifted-saha-a68082.netlify.app/",
  },
  { title: "Marketplace Application", description: "10/10 I caught them all!" },
  {
    title: "Fitness Application - Fitalytics",
    description: "https://fitalytics.netlify.app/fit",
  },
  {
    title: "Fitness Application 2 - Fitness Club",
    description: " https://my-workout-app.netlify.app/",
  },
];

const Experience = () => {
  return (
    <Stack alignItems={{ xs: "center", lg: "flex-start" }} mt="37px" p="20px">
      <Box pl="20px" m="5px">
        <Typography className="title" color="#66fcf1">
          Experience
        </Typography>
      </Box>
      <Stack>
        {posts.map(({ title, description }, id) => (
          <Box key={id} paddingTop="40px">
            <BlogCard
              key={`${id}-item`}
              title={title}
              description={description}
            >
              {title} {description}
            </BlogCard>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;
