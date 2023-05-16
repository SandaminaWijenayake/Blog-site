import React from "react";
import BlogList from "./BlogList";
import { Grid, Container } from "@mui/material";

const Blog = ({ blogs }) => {
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          {blogs.map((details) => (
            <Grid item xs={12} sm={6} md={4}>
              <BlogList details={details} key={details.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
