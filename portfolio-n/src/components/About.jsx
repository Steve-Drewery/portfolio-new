import { React } from "react";
import { Box, Stack, Typography } from "@mui/material";
import AboutCard from "./AboutCard";

const posts = [
  {
    title: "Hobbies and Interests",
    description:
      "Through having a competitive nature, I really do enjoy doing just about anything I can improve on. From gaming, playing sports, playing with cars to working out, I'm always happy when I'm refining a skillset. Being somewhat adrenaline seeker for that seratonin fix I have always enjoyed fast cars and any extreme sports. Skydiving at Byron Bay was definitely a high point and most recently going for a helicopter ride and flying one the next day.",
  },
  {
    title: "Work History",
    description:
      "For the past 13 years I have been working at KFC in the management team while studying and finding my path. I worked as a roulette dealer at the casino for a brief period and I'm also a volunteer firefighter. ",
  },
];

const Blog = () => {
  return (
    <Stack alignItems={{ xs: "center", lg: "flex-start" }} mt="37px" p="20px">
      <Box pl="20px" m="5px">
        <Typography className="title" color="#66fcf1">
          About Me
        </Typography>
      </Box>
      <Stack>
        {posts.map(({ title, description }, id) => (
          <Box key={id} paddingTop="40px">
            <AboutCard
              key={`${id}-item`}
              title={title}
              description={description}
            >
              {title} {description}
            </AboutCard>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Blog;
