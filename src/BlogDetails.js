import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import { Button, CardMedia, Grid, Typography } from "@mui/material";

// const CollectionRef = collection(db, "posts");

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  // const getRef = doc(db, "posts", id);
  // getDoc(getRef).then((doc) => {
  //   setBlogDetails(doc.data(), doc.id);
  // });

  useEffect(() => {
    const blog = async () => {
      try {
        const getRef = doc(db, "posts", id);
        await getDoc(getRef).then((doc) => {
          setBlogDetails({ ...doc.data(), id: doc.id });
        });
        setIsLoading(false);
        // console.log(getData.docs);
        // // setBlogs(getData);
        // const filteredData = getData.docs.map((doc) => ({
        //   ...doc.data(),
        //   id: doc.id,
        // }));
        // setBlogs(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    blog();
  }, []);
  console.log(blogDetails);

  const deleteHandler = async () => {
    setIsLoading(true);
    const getRef = doc(db, "posts", id);
    try {
      await deleteDoc(getRef);
    } catch (err) {
      console.error(err);
    }
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
          }}
        >
          Loading...
        </Typography>
      ) : (
        <Grid sx={{ padding: "50px" }} container spacing={2}>
          <Grid sx={{ paddingRight: "50px" }} xs={8}>
            <Typography>
              <h1>{blogDetails.title}</h1>
            </Typography>
            <Typography>
              <p>{blogDetails.body}</p>
            </Typography>
          </Grid>
          <Grid xs={4}>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ height: "500px" }}
              image={blogDetails.imageURL}
            />
          </Grid>
          <Button variant="contained" color="error" onClick={deleteHandler}>
            Delete post
          </Button>
        </Grid>
      )}
    </>
  );
};

export default BlogDetails;
