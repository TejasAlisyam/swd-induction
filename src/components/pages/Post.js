import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Post = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    loadPosts();
  }, []);
  const { id } = useParams();
  const loadPosts = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPost(result.data);
    console.log(result.data);
  };
  return (
    <div>
      <h1>POSTS</h1>
      <Card
        variant="outlined"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {posts.map((post, index) =>
          post.userId == id ? (
            <Box sx={{ width: "30%" }}>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 3, sm: 2, md: 3 }}
              >
                <Grid
                  item
                  xs={30}
                  style={{ width: "100px", textAlign: "center" }}
                >
                  <Item>
                    <h2>{post.title}</h2> <p> {post.body}</p>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          ) : null
        )}
      </Card>
    </div>
  );
};

export default Post;
