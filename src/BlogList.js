import React from "react";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const BlogList = ({ details }) => {
  console.log(details);
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/blogs/${details.id}`}>
        <Card sx={{ maxWidth: 345, height: "420px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="225"
            image={details.imageURL}
          />
          <CardContent id="a">
            <Typography
              sx={{
                overflow: "hidden",
                height: "65px",
                fontWeight: "1000",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {details.title}
            </Typography>
            <Typography
              sx={{ height: "40px", overflow: "hidden" }}
              variant="body2"
              color="text.secondary"
            >
              {details.body}
            </Typography>
            <Typography
              sx={{ fontWeight: "700", marginTop: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              {"Author: " + details.author}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default BlogList;
