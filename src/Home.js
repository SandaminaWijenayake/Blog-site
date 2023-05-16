import React, { useEffect, useState } from "react";
// import axios from "axios";
import Blog from "./Blog";
// import { Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

const sxStyle = {
  backgroundColor: "#fff",
  paddingTop: "75px",
};

// let isFirstTime = true;
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const CollectionRef = collection(db, "posts");

  useEffect(() => {
    const blogList = async () => {
      try {
        const getData = await getDocs(CollectionRef);
        console.log(getData);
        // setBlogs(getData);
        const filteredData = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogs(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    blogList();
  }, []);

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
        <Box sx={sxStyle}>
          <Blog blogs={blogs} />
        </Box>
      )}
    </>
  );
};

export default Home;
