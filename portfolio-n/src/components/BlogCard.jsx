import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function BlogCard(props) {
  const { title, description } = props;
  return (
    <Card
      sx={{
        backgroundColor: "#606060",
        opacity: "0.95",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <CardHeader
        sx={{ color: "inherit", backgroundColor: "#343434" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="inherit">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
