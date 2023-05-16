import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import { collection } from "firebase/firestore";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Autocomplete,
  Button,
} from "@mui/material";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config/firebase";

const CollectionRef = collection(db, "posts");
const style = {
  marginBottom: "20px",
};
const options = [
  { label: "Sandamina wijenayake", id: 1 },
  { label: "supem maduwantha", id: 2 },
];
const Create = () => {
  const [blogTitle, setBlogName] = useState("");
  const [blogAuthor, setBlogAuthor] = useState(options[0]);
  const [blogContent, setBlogContent] = useState("");
  const [selectImage, setSelectImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageRef = ref(storage, `image/${selectImage.name + Math.random()}`);
    uploadBytes(imageRef, selectImage).then(() => {
      getDownloadURL(imageRef).then(async (data) => {
        try {
          await addDoc(CollectionRef, {
            title: blogTitle,
            author: blogAuthor.label,
            body: blogContent,
            imageURL: data,
          });
          // isPending = false;
          navigate("/");
        } catch (err) {
          console.error(err);
        }
      });
    });
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
        <form onSubmit={handleSubmit}>
          <Container>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ paddingTop: "50px" }}
            >
              Add a new blog
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} sx={style}>
                <TextField
                  value={blogTitle}
                  onChange={(e) => {
                    setBlogName(e.target.value);
                  }}
                  fullWidth
                  required
                  id="standard-basic"
                  label="Blog title"
                  variant="standard"
                />
              </Grid>
              <Grid item sm={12} xs={12} sx={style}>
                <Autocomplete
                  onChange={(e, value) => {
                    // console.log("abcd ", value);
                    setBlogAuthor(value);
                  }}
                  value={blogAuthor}
                  required
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  label="Blog author"
                  renderInput={(params) => (
                    <TextField {...params} label="Blog author" />
                  )}
                />
              </Grid>
              <Grid item sm={12} xs={12} sx={{ marginTop: "15px" }}>
                <TextField
                  value={blogContent}
                  onChange={(e) => {
                    setBlogContent(e.target.value);
                  }}
                  required
                  fullWidth
                  id="outlined-multiline-static"
                  label="Blog content"
                  multiline
                  rows={10}
                />
              </Grid>
              <Grid item sm={12} xs={12} sx={{ marginTop: "15px" }}>
                <input
                  onChange={(e) => {
                    setSelectImage(e.target.files[0]);
                  }}
                  required
                  type="file"
                  accept="image/*"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #1565C0",
                    paddingBottom: "4px",
                  }}
                />
              </Grid>
              <Grid item sm={12} xs={12} sx={{ marginTop: "15px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{ padding: "10px", marginBottom: "30px" }}
                >
                  Post
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      )}
    </>
  );
};

export default Create;
